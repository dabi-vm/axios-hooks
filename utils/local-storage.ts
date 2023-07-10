// Get an item from local storage
export const getLocalStorageItem = (key: string): string | null => {
  return localStorage.getItem(key);
};

// Set an item in local storage
export const setLocalStorageItem = (key: string, value: string): void => {
  localStorage.setItem(key, value);
};
