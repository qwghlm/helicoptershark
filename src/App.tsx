import React, { useState } from 'react';
import styled from 'styled-components'

import Result from "./components/Result";
import Loader from "./components/Loader";
import UploadForm from "./components/UploadForm";
import GlobalStyle from './styles/GlobalStyle';

const StyledApp = styled.main`
  margin: 0;
  font-family: "Open Sans", sans-serif;
`;

const INITIAL = 1;
const LOADING = 2;

function App(): JSX.Element {

  const [result, setResult] = useState<null|number>(null);
  const [state, setState] = useState(INITIAL);

  const onSubmit = (): void => {
    setState(LOADING);
    setTimeout(onSubmitSuccess, 500);
  }
  const onSubmitSuccess = (): void => {
    setTimeout(onResult, 500);
  }
  const onResult = (): void => {
    setState(INITIAL);
    setResult(0.99);
  }
  const onReset = (): void => {
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
