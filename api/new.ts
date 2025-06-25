import api from "@/utils/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const newPost = async (postData: {
  title: string;
  body: string;
  country: number;
}) => {
  const token = await AsyncStorage.getItem('Token');
  // console.log(token);
  // return await api.post("/api/board/post", postData, {
  //   headers: {
  //     Authorization: `Bearer ${token}`
  //   }
  // });
  const res = await api.post("/api/board/post", postData, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return res;
};

interface CommentPostData {
  body: string
}

export const postComment = async (postId: number, commentData: CommentPostData) => {
  const token = await AsyncStorage.getItem("Token")

  const res = await api.post(
    `/api/comment/${postId}`,
    commentData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )
  return res.data
}