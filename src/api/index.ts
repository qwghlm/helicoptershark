import { UploadResponse, JobResponse } from "./types";

const API_PREFIX = "/api/v1"

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

export function createJob(fileName: string): Promise<JobResponse> {

  const body = JSON.stringify({ fileName });

  return fetch(`${API_PREFIX}/process`, { method: "POST", body })
    .then((res: Response) => res.json())
    .then(({ id }: JobResponse) => ({ id }));

}
