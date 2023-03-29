const axios = require("axios");

const URL = "http://fiot.kpi.ua/";

const getFromDomain = async () => {
  const res = await axios.get(URL + "", { responseType: "document" });
  return res.data;
};

module.exports = {
  getFromDomain,
};
