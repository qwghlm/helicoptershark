export interface ResultData {
  id: number;
  match: number;
}

export interface ResultProps {
  result: ResultData;
  onReset: () => void;
}

export interface UploadFormProps {
  onSubmit: (fileName: string) => void;
}

export interface UploadFormState {
  files: string[];
}
