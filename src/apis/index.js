import { apiGet, apiPostFile, apiPost, apiPutFile } from "./axios";

// admin apis
export const login = async ({ username, password }) => {
  const { data } = await apiPost('/admin/login', { username, password });
  return data
};

export const createTitle = async (payload) => {
  const formData = new FormData();
  console.log(payload)
  formData.append('text', payload.text);
  payload.image && formData.append(`image`, payload.image);
  formData.append('active', payload.active);

  const { data } = await apiPostFile('/admin/titles', formData);

  return data;
};

export const updateTitle = async (id, payload) => {
  const formData = new FormData();

  formData.append('text', payload.text);
  payload.image && formData.append(`image`, payload.image);
  formData.append('active', payload.active);

  const { data } = await apiPutFile(`/admin/titles/${id}`, formData)
  return data;
}

export const createContent = async (payload) => {
  const formData = new FormData();

  formData.append('text', payload.text);
  payload.image && formData.append(`image`, payload.image);
  formData.append('published', payload.published);

  const { data } = await apiPostFile('/admin/contents', formData)
  return data;
}

export const updateContent = async (id, payload) => {
  const formData = new FormData();

  formData.append('text', payload.text);
  formData.append('order', payload.order);
  payload.image && formData.append(`image`, payload.image);
  formData.append('published', payload.published);


  const { data } = await apiPutFile(`/admin/contents/${id}`, formData)
  return data;
}

export const getAdminTitlesData = async () => {
  const { data } = await apiGet('/admin/titles')
  return data;
}

export const getAdminContentsData = async () => {
  const { data } = await apiGet('/admin/contents')
  return data;
}


// public apis
export const getTitlesData = async () => {
  const { data } = await apiGet('/public/titles')
  return data;
}

export const getTitleData = async (id) => {
  const { data } = await apiGet(`/public/titles/${id}`)
  return data;
}

export const getContentsData = async () => {
  const { data } = await apiGet('/public/contents')
  return data;
}

export const getContentData = async (id) => {
  const { data } = await apiGet(`/public/contents/${id}`)
  return data;
}
