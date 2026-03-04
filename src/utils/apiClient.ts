const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};

const handleResponse = (response: Response) => {
  if (!response.ok) {
    return Promise.reject(new Error(`HTTP error! status: ${response.status}`));
  }
  return response.json();
};

export const apiClient = {
  get: (url: string) => {
    return fetch(url, { headers: DEFAULT_HEADERS }).then(handleResponse);
  },

  post: (url: string, data: object) => {
    return fetch(url, {
      method: 'POST',
      headers: DEFAULT_HEADERS,
      body: JSON.stringify(data),
    }).then(handleResponse);
  },

  // Other HTTP methods can be added here (put, delete, etc.)
};
