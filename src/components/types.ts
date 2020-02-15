export interface ResultProps {
  result: null | number;
  onReset: () => void;
}

export interface UploadFormProps {
  onSubmit: () => void;
}

export interface UploadFormState {
  files: string[];
}
