import { axiosInstance } from './axiosInstance';
import { useUserdata } from './context';

export const useApi = (url, type = 'get') => {
  const {
    userdata,
    setUserData,
    message,
    setMessage,
    isLoading,
    setIsLoading,
    success,
    setSuccess,
  } = useUserdata();
  const makeRequest = async (payload) => {
    try {
      setIsLoading(true);
      const { data } = await axiosInstance[type](url, payload);
      if (data) {
        const { newdata, success, message } = data;
        console.log({ message, success, newdata });
        setMessage(message);
        setSuccess(success);
        setUserData(newdata);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      setMessage(error);
    }
  };

  return { makeRequest };
};
