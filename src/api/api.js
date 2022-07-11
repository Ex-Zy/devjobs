const BASE_URL = "http://localhost:3004";

export default class Api {
  static async fetch(endpoint) {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);

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
