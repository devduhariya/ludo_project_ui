import axios from "axios";

const API_URL = "http://localhost:9000/api/";

const register = (name, ph, email, password) => {
  return axios.post(API_URL + "auth/register", {
    name,
    ph,
    email,
    password
  });
};

const login = (ph, password) => {
  return axios
    .post(API_URL + "auth/login", {
      ph,
      password,
    })
    .then((response) => {
      console.log(response.data);
      if (response.data.auth) {
        localStorage.setItem("token", JSON.stringify(response.data.token));
      }

      return response.data;
    });
};

var token = JSON.parse(localStorage.getItem('login'));
if (token) {
  const auth = token.token
}

const query = (whatsapp, paytm, reciver_Paytm, txn_ID, amount, message, screenshots) => {
  return axios
    .post(API_URL + "query", { headers: { 'Authorization': 'Bearer ' + token.token } },
      {
        whatsapp,
        paytm,
        txn_ID,
        reciver_Paytm,
        amount,
        message,
        screenshots

      })
    .then((response) => {
      console.log(response.data);
      if (response.data.auth) {
        localStorage.getItem("token", response.data.token);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("login");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  query
};