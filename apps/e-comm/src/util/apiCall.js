import { retryRequest } from "./retry";

export async function apiClient(url, options = {}) {
  return retryRequest(async () => {
    const response = await fetch(url, {
      ...options,
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return response.json();
  });
}
