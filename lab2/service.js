const axios = require("axios");

const URL = "http://fiot.kpi.ua/";

const getFromDomain = async () => {
  const res = await axios.get(URL + "", { responseType: "document" });
  return res.data;
};

const getNewsText = async (query) => {
  const res = await axios.get(query, { responseType: "document" });
  return res.data;
};

module.exports = {
  getFromDomain,
  getNewsText,
};
