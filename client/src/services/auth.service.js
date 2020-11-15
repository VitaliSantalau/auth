import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

function register(userName, email, password) {
  return axios.post(API_URL + "signup", { userName, email, password });
};

function login(userName, password) {
  return axios.post(API_URL + "signup", { userName, password })
              .then((res) => {
                if(res.data.accessToken) {
                  localStorage.setItem("user", JSON.stringify(res.data))
                };
                return res.data;
               });
};

function logout() {
  localStorage.removeItem("user");
};

function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register, 
  login, 
  logout, 
  getCurrentUser,
};