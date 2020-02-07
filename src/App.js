import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import Result from "./components/Result";
import Loader from "./components/Loader";
import UploadForm from "./components/UploadForm";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html { font-size:120%; }

  h1 {
    font-size: 200%;
    margin: 0 0 3rem;
    font-family: "Varela Round", sans-serif;
  }

  body {
    background-color: #FAFAFA;
    font-family: "Open Sans", sans-serif;
  }

  p {
    margin: 1rem 0;
  }

  button {
    padding: 0.5rem;
    border-radius 0;
    border: 3px #FFF solid;
    background: transparent;
    color: #FFF;
    text-transform: uppercase;
  }
`

const DISPLAY_FORM = 1;
const DISPLAY_UPLOADING = 2;
const DISPLAY_THANKS = 3;

const DEFAULT_API_DATA = {
  result: null,
};

const StyledApp = styled.main`
  margin: 4rem auto 0;
  max-width: 1024px;

  & > div {
    min-height: 200px;
  }
`;

function App() {

  const [state, setState] = useState(DISPLAY_FORM);
  const [{ result }, setData] = useState(DEFAULT_API_DATA);

  const onSubmit = () => {
    setState(DISPLAY_UPLOADING);
    setTimeout(() => {
      setState(DISPLAY_THANKS);
      setTimeout(() => setData({
        result: 0.99
      }), 750);
    }, 750);
  }

  const onReset = () => {
    setState(DISPLAY_FORM);
    setData(DEFAULT_API_DATA);
  }

  return (
    <StyledApp>
      <GlobalStyle />

      <h1>Helicopter Shark</h1>

      {(state === DISPLAY_FORM) && <UploadForm onSubmit={onSubmit} />}
      {(state === DISPLAY_UPLOADING) && <Loader />}
      {(state === DISPLAY_THANKS) && <Result result={result} onReset={onReset} />}

    </StyledApp>
  );
}

export default App;
