import axios from "./axios.js";

export const registerRequest = (user) => axios.post(`/register`, user);

export const loginResquest = (user) => axios.post(`/login`, user);
