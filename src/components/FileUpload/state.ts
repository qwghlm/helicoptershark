import md5 from "md5";

import { FileUploadState, RemoteFile } from "./types";
import { UNLOADED, LOADING, LOADED, ERROR } from './api';

function hashFile(f: File): string {
  return md5(f.name + f.size + f.lastModified)
}

// DropZone state is complicated so we use a useReducer to record its state

export const FILE_ADDED = "fileAdded";
export const FILE_START_UPLOAD = "fileStartUpload";
export const FILE_UPLOAD_COMPLETE = "fileUploadComplete";
export const FILE_DELETED = "fileDeleted";
export const FILE_ERROR = "fileError";

function updateFiles(files: RemoteFile[], hash: string, value: Partial<RemoteFile>): RemoteFile[] {
  return files.map((item) => {
    if (item.hash === hash) {
      return { ...item, ...value }
    }
    return item;
  })
}

export default function reducer(state: FileUploadState, action: any): FileUploadState {

  const { files } = state;

  const { type, file, hash, fileName } = action;

  if (type === FILE_ADDED) {
    const newFile = {
      file,
      hash: hashFile(file),
      remoteName: null,
      status: UNLOADED,
    };
    return {
      ...state,
      files: files.concat([newFile])
    }
  }

  if (type === FILE_START_UPLOAD) {
    return {
      ...state,
      files: updateFiles(files, hash, { status: LOADING })
    }
  }

  if (type === FILE_UPLOAD_COMPLETE) {
    return {
      ...state,
      files: updateFiles(files, hash, { remoteName: fileName, status: LOADED })
    }
  }

  if (type === FILE_ERROR) {
    return {
      ...state,
      files: updateFiles(files, hash, { status: ERROR })
    }
  }

  if (type === FILE_DELETED) {
    return {
      ...state,
      files: files.filter(file => file.hash !== hash)
    }
  }

  throw new Error("Unrecognized action type");
}
