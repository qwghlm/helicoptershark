import React from 'react';

function ProcessingMessage() {
  return <p>Thanks! We are processing now...</p>;
}

function Scores({ result }) {
  return <p>
    Hurray! The image is a {Math.round(result*1000)/10}% match!
  </p>
}

export default function Result({ result, onReset }) {

  return <React.Fragment>

    {(result === null) ? <ProcessingMessage /> : <Scores result={result} />}

    <div>
      <button type="button" onClick={(e) => onReset()}>Go back</button>
    </div>
  </React.Fragment>
}
