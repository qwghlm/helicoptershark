
const API_PREFIX = "/api/v1"

interface UploadResponse {
  url: string;
  fileName: string;
}

export function getUploadUrl(fileName: string): Promise<UploadResponse> {
  const body = JSON.stringify({ fileName });
  return fetch(`${API_PREFIX}/upload`, { method: "POST", body })
    .then((res: Response) => res.json())
    .then(({ url, fileName }: UploadResponse) => ({ url, fileName }));
}

export function uploadFile(file: File, url: string): Promise<true> {
  return fetch(url, { method: "PUT", body: file} )
    .then((response) => {
      return true;
    })
}

export const UNLOADED = 0;
export const LOADING = 1;
export const LOADED = 2;
export const ERROR = -1;
