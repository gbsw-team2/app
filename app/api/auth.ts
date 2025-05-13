import axios from "axios";

export const sendVerificationCode = async (email: string) => {
  return await axios.post('http://백엔드/api', {email});
}

export const verifyCode = async (email: string, code: string) => {
  return await axios.post('http://백엔드/api', {email, code});
}

export const signup = async (data: {
  name: string;
  email: string;
  password: string;
  country: string;
}) => {
  return await axios.post('http://백엔드/api', data);
}