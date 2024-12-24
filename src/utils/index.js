export const setAccessToken = (value) => localStorage.setItem('jwt', value)
export const getAccessToken = () => localStorage.getItem('jwt') || ''

export const getHeaders = (isFileUpload = false) => {
  const token = getAccessToken();

  if (isFileUpload) {
    return {
      Authorization: `Bearer ${token || ""}`,
    };
  }

  return {
    Authorization: `Bearer ${token || ""}`,
    "Content-Type": "application/json",
  };
};

export const getImage = (filename) => {
  return `${process.env.REACT_APP_BASE_API_URL}${filename}`
}