import React from 'react';
import styled from 'styled-components'
import Button from '../../elements/Button';
import { UNLOADED, LOADING, LOADED, ERROR } from './state';

const StyledFileItem = styled.div`
  padding: 1rem 0;
  margin: .2rem;
  border: 1px #FFF solid;
  border-width: 0 0 1px 0;
  text-align: left;
  display: flex;
  flex-flow: row wrap;

  &:last-child {
    border-bottom-width: 0;
  }

  & div:nth-child(1) {
    flex: 0 1 80px;
    text-align: center;
  }

  & div:nth-child(2) {
    flex: 0 1 calc(100% - 128px);
    text-align: left;
  }

  & div:nth-child(3) {
    flex: 0 1 48px;
    text-align: center;
  }

  & div:nth-child(4) {
    flex: 0 1 100%;
    padding-left: 80px;
    font-size: 80%;
  }
`;

interface FileItemProps {
  file: File;
  hash: string;
  status: number;
  onDelete: (hash: string) => void;
}

interface LoadingProps {
  status: number;
}


function LoadingIcon({ status }: LoadingProps): JSX.Element {
  let className;

  if (status === UNLOADED || status === LOADING) {
    className = "fa-spinner";
  }
  else if (status === LOADED) {
    className = "fa-check-circle";
  }
  else {
    className = "fa-exclamation-triangle";
  }
  return <i className={`fas fa-2x ${className}`}></i>
}

function LoadingStatus({ status }: LoadingProps): JSX.Element {
  if (status === LOADING) {
    return <React.Fragment>Loading...</React.Fragment>
  }
  else if (status === LOADED) {
    return <React.Fragment>Loaded!</React.Fragment>
  }
  else if (status === ERROR) {
    return <React.Fragment>Error loading, please retry.</React.Fragment>

  }
  return <React.Fragment />
}

export default function FileItem({ file, hash, status, onDelete }: FileItemProps): JSX.Element {

  const { name } = file;

  const onClick = (e: React.MouseEvent): void => {
    onDelete(hash);
  }

  return <StyledFileItem>
    <div>
      <LoadingIcon status={status} />
    </div>
    <div>
      { name }
    </div>
    <div>
      <Button onClick={onClick}>X</Button>
    </div>
    <div>
      <LoadingStatus status={status} />
    </div>
  </StyledFileItem>
}
