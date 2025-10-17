import axios from 'axios';

export const signupHandler = async (username, password, email, number) => {
  try {
    const data = await axios.post('http://localhost:3500/user/signup', {
      username: username,
      password: password,
      email: email,
      number: number,
    });
  } catch (error) {
    console.log('error is in signuphandler', error);
  }
};
