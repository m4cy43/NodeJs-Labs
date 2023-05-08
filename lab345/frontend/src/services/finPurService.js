import axios from "axios";

const FIN_API_URL = "/api/v1/fin/";
const PUR_API_URL = "/api/v1/pur/";

const getAllRows = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(FIN_API_URL, config);

  return response.data;
};

const getQueryRows = async (query, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    FIN_API_URL + `q?page=${query.page}&items=${query.items}`,
    config
  );

  return response.data;
};

const createRow = async (data, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const purData = {
    categoryId: data.categoryId,
    name: data.name,
  };
  const response1 = await axios.post(PUR_API_URL, purData, config);
  const finData = {
    purchaseId: response1.data._id,
    sum: data.sum,
  };
  const response2 = await axios.post(FIN_API_URL, finData, config);

  return response2.data;
};

const deleteRow = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response1 = await axios.post(FIN_API_URL + id, config);
  await axios.delete(PUR_API_URL + response1.data._id, config);
  const response2 = await axios.delete(FIN_API_URL + id, config);

  return response2.data;
};

const finPurService = {
  getAllRows,
  getQueryRows,
  createRow,
  deleteRow,
};

export default finPurService;
