import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Button from '../../elements/Button';
import { getUploadUrl, uploadFile } from './api';

const StyledFileItem = styled.div`
  padding: 1rem 0;
  margin: .2rem;
  border: 1px #FFF solid;
`;

interface FileItemProps {
  file: File;
  hash: string;
  onDelete: (hash: string) => void;
}

export default function FileItem({ file, hash, onDelete }: FileItemProps): JSX.Element {

  const { name } = file;
  const [ url, setUrl ] = useState<string|null>(null);
  const [ percent, setPercent ] = useState(0);

  useEffect(() => {
    getUploadUrl(file.name)
      .then(uploadUrl => {
        setPercent(0.01);
        uploadFile(file, uploadUrl)
          .then(fileName => {
            setPercent(1);
          })
      })
  }, [file]);

  const onClick = (e: React.MouseEvent): void => {
    onDelete(hash);
  }

  console.log(url);

  return <StyledFileItem>
    { name }<br/>
    { Math.floor(percent*100) }% uploaded
    <Button onClick={onClick}>X</Button>
  </StyledFileItem>
}
