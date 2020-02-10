import React, { useCallback } from 'react'
import {useDropzone} from 'react-dropzone'
import styled, { css } from 'styled-components'

import FileItem from './FileItem';

export interface DropZoneProps {
  files: string[];
  maxFiles?: number;
  onChange: (files: string[]) => void;
}

interface DropRootProps {
  isDragActive: boolean;
  isFull: boolean;
}

const StyledDropRoot = styled.div<DropRootProps>`
  margin: 1rem 0;
  border-width: 2px;
  border-color: #FFF;
  border-style: ${(props): string => props.isFull ? "solid" : "dashed"};
  ${(props): any => props.isDragActive && css`background: rgba(255,255,255,0.8);` }
`;

const StyledDropInput = styled.div`
  padding: 1rem 0;
`

export default function DropZone({ files, maxFiles = 1, onChange }: DropZoneProps): JSX.Element {

  const isFull = files.length === maxFiles;

  const onDrop = useCallback(acceptedFiles => {
    const availableSlots = maxFiles - files.length;
    const newFiles = acceptedFiles.slice(0, availableSlots).map((f: File) => f.name);
    onChange(files.concat(newFiles));
  }, [onChange, files, maxFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})

  const message = isDragActive ? "Drop files here..." : "Drag 'n' drop some files here, or click to select files";

  return (
    <StyledDropRoot {...getRootProps()} isDragActive={isDragActive} isFull={isFull}>

      { files.map((name, i) => <FileItem key={i} name={name} />) }

      { !isFull && <StyledDropInput>
        <input {...getInputProps()} />
        { message }
      </StyledDropInput> }

    </StyledDropRoot>
  )
}
