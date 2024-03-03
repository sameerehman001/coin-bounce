import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (data) => {
  let response;

  console.log("data from api function : ", data);

  try {
    response = await api.post("/login", data);
  } catch (error) {
    return error;
  }

  return response;
};


export const signUp = async (data) => {
  let response;

  console.log("data from api function : ", data);

  try {
    response = await api.post("/register", data);
  } catch (error) {
    return error;
  }

  return response;
};
