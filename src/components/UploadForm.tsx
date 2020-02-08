import React, { useState } from 'react';
import styled from 'styled-components'

import Button from "../elements/Button";
import Div from "../elements/Div";
import DropZone from "./DropZone";
import P from '../elements/P';
import { UploadFormProps } from './types';

const StyledDiv = styled(Div)`background-color: #3D3A4B;`;

const Header = styled.h1`
  font-size: 200%;
  font-family: "Varela Round", sans-serif;
`;

interface FormState {
  files: string[];
}

const DEFAULT_STATE = {
  files: []
}

export default function UploadForm({ onSubmit }: UploadFormProps) {

  const [ values, setValues ] = useState<FormState>(DEFAULT_STATE)
  const {
    files
  } = values;

  const buttonDisabled = files.length === 0;

  const onFilesChange = (files: string[]) => {
    setValues({files})
  }
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(values);
    onSubmit();
  }

  return <StyledDiv>

    <Header>Helicopter Shark</Header>

    <P>Detect misinformation in a few taps! Get started by uploading an image.</P>

    <form action="">
      <div>
        <DropZone files={files} onChange={onFilesChange} />
      </div>

      <P>
        <Button type="button" disabled={buttonDisabled} onClick={onClick}>Go</Button>
      </P>
    </form>
  </StyledDiv>
}
