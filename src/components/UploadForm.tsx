import React, { useState } from 'react';
import styled from 'styled-components'

import Button from "../elements/Button";
import Div from "../elements/Div";
import FileUpload from "./FileUpload";
import P from '../elements/P';
import { UploadFormProps, UploadFormState } from './types';
import H1 from '../elements/H1';

const StyledDiv = styled(Div)`background-color: #3D3A4B;`;

const DEFAULT_STATE = {
  files: []
}

export default function UploadForm({ onSubmit }: UploadFormProps): JSX.Element {

  const [ values, setValues ] = useState<UploadFormState>(DEFAULT_STATE)
  const { files } = values;

  const buttonDisabled = files.length === 0;

  const onFilesChange = (files: string[]): void => {
    setValues({
      ...values,
      files
    });
  }
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    onSubmit();
  }

  return <StyledDiv>

    <H1>Helicopter Shark</H1>

    <P>Detect misinformation in a few taps! Get started by uploading an image.</P>

    <form action="">
      <div>
        <FileUpload onChange={onFilesChange} />
      </div>

      <P>
        <Button type="button" disabled={buttonDisabled} onClick={onClick}>Go</Button>
      </P>
    </form>
  </StyledDiv>
}
