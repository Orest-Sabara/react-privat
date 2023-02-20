import axios from "axios";

import { PRIVAT_API_URL } from "../../constants";

export const getCurrencies = async () => {
  return axios.get(`https://api.allorigins.win/raw?url=${encodeURIComponent(PRIVAT_API_URL)}`);
};
