const BASE_URL = "http://localhost:3004";

class BaseApi {
  static async fetch(endpoint) {
    try {
      const response = await fetch(`${BASE_URL}/api${endpoint}`);

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
