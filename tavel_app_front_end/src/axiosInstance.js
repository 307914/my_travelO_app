import axios from 'axios';
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3500',
  withCredentials: true,
});

export const END_POINTS = {
  HOTELS: {
    GETHOTELS: '/api/gethotels',
  },
  WISHLIST: {
    ADDTOWISHLIST: '/user/addtowishlist',
    REMOVEFROMWISHLIST: '/user/removefromwishlist',
  },
  USER: {
    LOGIN: '/user/login',
    LOGINVIACOOKIE: '/user/login',
    LOGOUT: '/user/logout',
  },
};

export const REQUEST_TYPES = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
};
