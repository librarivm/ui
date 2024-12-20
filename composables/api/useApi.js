/**
 * API composable.
 *
 * @param {string} url - The URL to attach to the API_BASE_URL.
 * @param {...Object?} options - Additional options for the service.
 * @param {...Object?} options.headers - Additional options for the service.
 */
export const useApi = (url, options = {}) => {
  const config = useRuntimeConfig();

  return $fetch(url, {
    ...options,
    baseURL: config.public.apiBaseUrl,
    headers: {
      ...(options?.headers || {}),
      'Content-Type': 'application/json',
      'X-Client-App-ID': config.app.clientAppId,
    },
  });
};
