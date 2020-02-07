import React from 'react';
import styled from 'styled-components'

import Div from "../elements/Div";
import Button from "../elements/Button";

const StyledDiv = styled(Div)`background-color: #27A9F1;`;

function ProcessingMessage() {
  return <p>Thanks! We are processing now...</p>;
}

function Scores({ result }) {
  return <p>
    Hurray! The image is a {Math.round(result*1000)/10}% match!
  </p>
}

export default function Result({ result, onReset }) {

  return <StyledDiv>

    {(result === null) ? <ProcessingMessage /> : <Scores result={result} />}

    <div>
      <Button type="button" onClick={(e) => onReset()}>Go back</Button>
    </div>
  </StyledDiv>
}
