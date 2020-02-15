/* eslint:disable */

import React, { useEffect, useReducer } from 'react'

import FileItem from './FileItem';
import DropZone from "./DropZone";
import { getUploadUrl, uploadFile, UNLOADED } from './api';
import reducer, { FILE_ADDED, FILE_START_UPLOAD, FILE_UPLOAD_COMPLETE, FILE_DELETED, FILE_ERROR }  from "./state";

export interface DropZoneProps {
  maxFiles?: number;
  onChange: (files: string[]) => void;
}

// TODO: Filters on max filesize, file type
export default function FileUpload({ maxFiles = 1, onChange }: DropZoneProps): JSX.Element {

  const [state, dispatch] = useReducer(reducer, {files: []});
  const { files } = state;

  // Handlers for accepting an added file
  const onFileAdd = (newFiles: File[]): void => {
    const remainingPlaces = maxFiles - files.length;
    if (remainingPlaces <= 0) {
      return;
    }
    newFiles.slice(0, remainingPlaces).forEach((file, i) => {
      dispatch({
        type: FILE_ADDED,
        file,
      });
    });
  }

  const onFileDelete = (hash: string): void => {
    dispatch({
      type: FILE_DELETED,
      hash,
    })
  }

  // Watches changes in state and if any new unloaded files added, initialises loading
  // for them
  useEffect(() => {
    files.filter(({status}) => status === UNLOADED).forEach(({ hash, file }) => {
      dispatch({
        type: FILE_START_UPLOAD,
        hash,
      });
      getUploadUrl(file.name)
        .then(({ url, fileName }) => {
          uploadFile(file, url)
            .then(() => {
              dispatch({
                type: FILE_UPLOAD_COMPLETE,
                hash,
                fileName,
              })
            })
            .catch(err => dispatch({
              type: FILE_ERROR,
              hash,
            }))
        })
        .catch(err => dispatch({
          type: FILE_ERROR,
          hash,
        }))
    });
  }, [files])

  // Watches the file names and updates the onChange event when something happens
  useEffect(() => {
    const fileNames = files.map(item => item.remoteName).filter(name => name !== null);
    onChange(fileNames as string[])
  }, [files]);

  return (
    <DropZone isFull={files.length === maxFiles} onFileAdd={onFileAdd}>
      { files.map(({file, hash, status}, i) =>
          <FileItem key={hash} hash={hash} file={file}
            status={status} onDelete={onFileDelete} />)
      }
    </DropZone>
  )
}
