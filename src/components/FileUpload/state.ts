import md5 from "md5";

import { FileUploadState } from "./types";
import { UNLOADED, LOADING, LOADED } from './api';


function hashFile(f: File): string {
  return md5(f.name)
}

// DropZone state is complicated so we use a useReducer to record its state

export const FILE_ADDED = "fileAdded";
export const FILE_START_UPLOAD = "fileStartUpload";
export const FILE_UPLOAD_COMPLETE = "fileUploadComplete";
export const FILE_DELETED = "fileDeleted";

export default function reducer(state: FileUploadState, action: any): FileUploadState {

  const { files } = state;

  if (action.type === FILE_ADDED) {
    const { file } = action;
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

  if (action.type === FILE_START_UPLOAD) {
    const { hash } = action;
    return {
      ...state,
      files: files.map((item) => {
        if (item.hash === hash) {
          return { ...item, status: LOADING }
        }
        return item;
      })
    }
  }

  if (action.type === FILE_UPLOAD_COMPLETE) {
    const { hash, fileName } = action;
    return {
      ...state,
      files: files.map((item) => {
        if (item.hash === hash) {
          return {
            ...item,
            remoteName: fileName,
            status: LOADED }
        }
        return item;
      })
    }
  }

  if (action.type === FILE_DELETED) {
    const { hash } = action;
    return {
      ...state,
      files: files.filter(file => file.hash !== hash)
    }
  }

  throw new Error();
}
