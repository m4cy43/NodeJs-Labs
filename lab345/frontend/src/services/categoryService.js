import axios from "axios";

const API_URL = "/api/v1/cat/";

const getAllCategories = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const createCategory = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, data, config);

  return response.data;
};

const deleteCategory = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);

  return response.data;
};

const categoryService = {
  getAllCategories,
  createCategory,
  deleteCategory,
};

export default categoryService;
