import api from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

//이메일 보내기
export const sendVerificationCode = async (email: string) => {
  return await api.post('/api/email/send', {email});
}

//이메일, 인증번호 보내기
export const verifyCode = async (email: string, vernum: string) => {
  return await api.post('/api/email/verify', {email, vernum});
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

export const googleLogin = async (code: string) => {
  return await api.get(`/login/oauth2/code/google?code=${code}`);
};

export const userinfo = async () => {
  const token = await AsyncStorage.getItem('Token');
  return await api.get('/api/users/info',
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
};

export const usermodify = async (data: {
  name: String,
  countryId: Number,
}) => {
  const token = await AsyncStorage.getItem('Token');
  return await api.put('/api/users/info', data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}

export const userpasswordmodify = async (data: {
  password: String,
}) => {
  const token = await AsyncStorage.getItem('Token');
  return await api.put('/api/users/info/password', data,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
}