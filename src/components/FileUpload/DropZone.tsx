import React, { useCallback } from 'react'
import styled from 'styled-components'
import {useDropzone} from 'react-dropzone'

interface StyledDivProps {
  isDragActive: boolean;
  isFull: boolean;
}

const StyledDiv = styled.div<StyledDivProps>`
  margin: 1rem 0;
  border-width: 2px;
  border-color: #FFF;
  border-style: ${(props): string => props.isFull ? "solid" : "dashed"};
  ${(props): string => props.isDragActive ? "background: rgba(255,255,255,0.2);" : "" }
`;

const StyledDropInput = styled.div`
  padding: 1rem 0;
`

interface DropZoneProps {
  isFull: boolean;
  onFileAdd: (files: File[]) => void;
  children?: React.ReactNode[];
}

export default function DropZone({ isFull, onFileAdd, children }: DropZoneProps): JSX.Element {

  const onDrop = useCallback(acceptedFiles => {
    onFileAdd(acceptedFiles);
  }, [onFileAdd]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})
  const message = isDragActive ? "Drop files here..." : "Drag 'n' drop some files here, or click to select files";

  return <StyledDiv {...getRootProps()} isDragActive={isDragActive && !isFull} isFull={isFull}>
    { children }

    { !isFull && <StyledDropInput>
        <input {...getInputProps()} />
        { message }
      </StyledDropInput> }
  </StyledDiv>

}
