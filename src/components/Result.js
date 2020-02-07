import React from 'react';
import styled from 'styled-components'

const StyledResult = styled.div`
  border-radius: 24px;
  padding: 36px;
  text-align: center;
  background-color: #27A9F1;
  color: #FFF;
`;

function ProcessingMessage() {
  return <p>Thanks! We are processing now...</p>;
}

function Scores({ result }) {
  return <p>
    Hurray! The image is a {Math.round(result*1000)/10}% match!
  </p>
}

export default function Result({ result, onReset }) {

  return <StyledResult>

    {(result === null) ? <ProcessingMessage /> : <Scores result={result} />}

    <div>
      <button type="button" onClick={(e) => onReset()}>Go back</button>
    </div>
  </StyledResult>
}
