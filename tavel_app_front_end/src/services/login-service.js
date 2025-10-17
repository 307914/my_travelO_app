import axios from 'axios';
import { axiosInstance } from '../axiosInstance';

export const loginHandler = async (number, password) => {
  try {
    const {
      data: {
        data: { username },
        token,
      },
    } = await axiosInstance.post('/user/login', {
      number: number,
      password: password,
    });
    return { username, token };
  } catch (error) {
    console.log('the error is in loginhandler', error);
  }
};
