import React, { useState } from 'react';
import styled from 'styled-components'

import { createJob } from './api';
import Result from "./components/Result";
import Loader from "./components/Loader";
import UploadForm from "./components/UploadForm";
import GlobalStyle from './styles/GlobalStyle';
import { ResultData } from './components/types';

const StyledApp = styled.main`
  margin: 0;
  font-family: "Open Sans", sans-serif;
`;

const INITIAL = 1;
const LOADING = 2;
const LOADED = 3;

function App(): JSX.Element {

  const [result, setResult] = useState<null|ResultData>(null);
  const [state, setState] = useState(INITIAL);

  const onSubmit = (fileName: string): void => {
    setState(LOADING);
    createJob(fileName)
      .then(({id}) => {
        setState(LOADED);
        setResult({
          id,
          match: 0.99
        });
      });
  }

  const onReset = (): void => {
    setState(INITIAL);
    setResult(null);
  }

  return (
    <StyledApp>
      <GlobalStyle />

      {(state === LOADING) ?
        <Loader />
        :
        (result === null) ?
          <UploadForm onSubmit={onSubmit} />
          :
          <Result result={result} onReset={onReset} />
      }

    </StyledApp>
  );
}

export default App;
