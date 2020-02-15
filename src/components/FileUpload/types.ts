export interface RemoteFile {
  file: File;
  hash: string;
  status: number;
  remoteName: string | null;
}

export interface FileUploadState {
  files: RemoteFile[];
}

// TODO Better way of typing actions
//
// export interface FileUploadFileAction {
//   type: "fileAdded";
//   file: File;
// }
// export interface FileUploadHashAction {
//   type: string;
//   hash: string;
//   fileName: string;
// }

// export type FileUploadAction = FileUploadFileAction | FileUploadHashAction;
