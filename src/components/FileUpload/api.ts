
const API_PREFIX = "/api/v1"

export function getUploadUrl(fileName: string): Promise<string> {
  const body = JSON.stringify({ fileName });
  return fetch(`${API_PREFIX}/upload`, { method: "POST", body })
    .then((res: any) => res.json())
    .then((json: any) => json.url);
}