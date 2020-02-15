import React from 'react';
import styled from 'styled-components'

import Div from "../elements/Div";
import Button from "../elements/Button";
import P from '../elements/P';

import { ResultProps } from './types';

const StyledDiv = styled(Div)`background-color: #27A9F1;`;

function ProcessingMessage(): JSX.Element {
  return <P>Thanks! We are processing now...</P>;
}

function Scores({ match }: { match: number }): JSX.Element {
  return <P>
    Hurray! The image is a {Math.round(match*1000)/10}% match!
  </P>
}

export default function Result({ result, onReset }: ResultProps): JSX.Element {

  const { match } = result;

  return <StyledDiv>

    {(result === null) ? <ProcessingMessage /> : <Scores match={match} />}

    <div>
      <Button type="button" onClick={(e): void => onReset()}>Go back</Button>
    </div>
  </StyledDiv>
}
