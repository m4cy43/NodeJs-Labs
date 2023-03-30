const axios = require("axios");

const URL = "http://fiot.kpi.ua/";

const getFromDomain = async () => {
  const res = await axios.get(URL + "", { Accept: "text/html" });
  return res.data;
};

const getNewsText = async (query) => {
  const res = await axios.get(query, { Accept: "text/html" });
  return res.data;
};

module.exports = {
  getFromDomain,
  getNewsText,
};
