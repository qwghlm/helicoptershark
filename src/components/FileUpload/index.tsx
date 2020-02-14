import React, { useState } from 'react'
import md5 from "md5";

import FileItem from './FileItem';
import DropZone from "./DropZone";

export interface DropZoneProps {
  files: string[];
  maxFiles?: number;
  onChange: (files: string[]) => void;
}

function hashFile(f: File): string {
  return md5(f.name)
}

export default function FileUpload({ files, maxFiles = 1, onChange }: DropZoneProps): JSX.Element {

  const [fileData, setFileData] = useState<File[]>([]);

  const onFileAdd = (newFiles: File[]): void => {
    const remainingPlaces = maxFiles - fileData.length;
    if (remainingPlaces > 0) {
      setFileData(fileData.concat(newFiles.slice(0, remainingPlaces)))
    }
  }
  const onFileDelete = (hash: string): void => {
    setFileData(fileData.filter(f => hashFile(f) !== hash))
  }

  return (
    <DropZone isFull={fileData.length === maxFiles} onFileAdd={onFileAdd}>
      { fileData.map((file, i) =>
          <FileItem key={hashFile(file)} file={file} hash={hashFile(file)} onDelete={onFileDelete} />)
      }
    </DropZone>
  )
}
