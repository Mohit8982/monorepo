export async function retryRequest(apiCall, retries = 3, delay = 1000) {
  try {
    return await apiCall();
  } catch (error) {
    if (retries === 0) throw error;

    await new Promise((resolve) => setTimeout(resolve, delay));

    return retryRequest(apiCall, retries - 1, delay * 2);
  }
}
