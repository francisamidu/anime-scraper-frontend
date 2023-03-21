function fetcher<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.text())
    .then((data) => data as TResponse);
}
export default fetcher;
