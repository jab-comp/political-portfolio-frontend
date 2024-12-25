
import axios from 'axios';
import { getHeaders } from '../utils';

const baseURL = process.env.REACT_APP_BASE_API_URL;

const instance = () => axios.create({
  baseURL,
  headers: getHeaders()
});

const fileInstance = () => axios.create({
  baseURL,
  headers: getHeaders(true)
})

export const apiGet = async (url, params = {}) => {
  try {
    const response = await instance().get(url, { params });
    return response
  } catch (error) {
    throw error;
  }
};

export const apiPost = async (url, data = {}) => {
  try {
    const response = await instance().post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiDelete = async (url) => {
  try {
    const response = await instance().delete(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiPostFile = async (url, data = {}) => {
  try {
    const response = await fileInstance().post(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiPut = async (url, data = {}) => {
  try {
    const response = await instance().put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const apiPutFile = async (url, data = {}) => {
  try {
    const response = await fileInstance().put(url, data);
    return response;
  } catch (error) {
    throw error;
  }
};
