import axios from "axios";
const BASE_URL = "https://startupwepapp.onrender.com";
export const API = {
  getData: async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/product`);
      return res.data;
    } catch (error) {
      console.log("error :", error);
      return null;
    }
  },
  getDataById: async (id) => {
    try {
      const res = await axios.get(`${BASE_URL}/api/LINK/${id}`);
      return res.data;
    } catch (error) {
      console.log("error :", error);
      return null;
    }
  },
  postData: async (data) => {
    try {
      const res = await axios.post(`${BASE_URL}/api/users`, data);
      
      return res.data;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  },
  putData: async (id, data) => {
    try {
      const res = await axios.put(`${BASE_URL}/api/LINK/${id}`, data);
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
  deleteData: async (id) => {
    try {
      const res = await axios.delete(`${BASE_URL}/api/LINK/${id}`);
      return res.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  },
};
