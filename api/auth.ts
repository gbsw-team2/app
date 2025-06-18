import api from "@/utils/api";

//이메일 보내기
export const sendVerificationCode = async (email: string) => {
  return await api.post('/api/email/send', {email});
}

//이메일, 인증번호 보내기
export const verifyCode = async (email: string, vernum: string) => {
  return await api.post('/api/users/verify', {email, vernum});
}

export const signup = async (data: {
  email: string;
  name: string;
  password: string;
  country: number;
  contact?: string;
}) => {
  return await api.post('/api/users', data);
}


export const login = async (data: {
  email: string;
  password: string;
}) => {
  return await api.post('/api/users/login', data,
  {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json"
    }
  }
  );
}