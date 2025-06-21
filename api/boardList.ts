import api from "@/utils/api"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

// 게시글 목록 가져오기 (국가별)
export const getPostsByCountry = async (postId: number) => {
  const token = await AsyncStorage.getItem('Token');
  console.log(token);
  const res = await api.get(!postId ? `/api/board/posts` : `/api/board/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return res;
};

// 게시글 좋아요
export const likePost = async (postId: number) => {
  return await api.post(`/api/board/post/${postId}`);
};

// 게시글 좋아요 취소
export const unlikePost = async (postId: number) => {
  return await api.delete(`/api/board/post/${postId}`);
};
