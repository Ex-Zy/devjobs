class BaseApi {
  static async fetch(endpoint) {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}${endpoint}`
      );

      if (!response.ok) {
        throw Error(response.statusText);
      }

      const data = await response.json();

      return {
        type: "success",
        error: null,
        data,
      };
    } catch (error) {
      return {
        type: "error",
        error: error?.message || error,
        data: null,
      };
    }
  }
}

export default BaseApi;
