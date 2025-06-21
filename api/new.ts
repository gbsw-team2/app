import api from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const newPost = async (data: {
  title: string;
  body: string;
  country: number;
}) => {
  const token = await AsyncStorage.getItem('Token');
  console.log(token);
  return await api.post("/api/board/post", data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};