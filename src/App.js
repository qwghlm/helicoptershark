import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Result from "./components/Result";
import Loader from "./components/Loader";
import UploadForm from "./components/UploadForm";

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }
  html {
    font-size:20px;
  }
  body {
    font-family: "Open Sans", sans-serif;
  }
  p {
    margin: 1rem 0;
  }
`

const StyledApp = styled.main`
  margin: 0;
`;

const INITIAL = 1;
const LOADING = 2;

function App() {

  const [result, setResult] = useState(null);
  const [state, setState] = useState(INITIAL);

  const onSubmit = () => {
    setState(LOADING);
    setTimeout(onSubmitSuccess, 500);
  }
  const onSubmitSuccess = () => {
    setTimeout(onResult, 500);
  }
  const onResult = () => {
    setState(INITIAL);
    setResult(0.99);
  }
  const onReset = () => {
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
