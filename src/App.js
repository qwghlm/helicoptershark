import React, { useState } from 'react';
import Result from "./components/Result";
import Loader from "./components/Loader";
import UploadForm from "./components/UploadForm";

const DISPLAY_FORM = 1;
const DISPLAY_UPLOADING = 2;
const DISPLAY_THANKS = 3;

const DEFAULT_API_DATA = {
  result: null,
};

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
  }

  return (
    <div className="App">

      <h1>Helicopter Shark</h1>

      {(state === DISPLAY_FORM) && <UploadForm onSubmit={onSubmit} />}
      {(state === DISPLAY_UPLOADING) && <Loader />}
      {(state === DISPLAY_THANKS) && <Result result={result} onReset={onReset} />}

    </div>
  );
}

export default App;
