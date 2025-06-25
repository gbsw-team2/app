import api from "@/utils/api"; 
import AsyncStorage from "@react-native-async-storage/async-storage";

// 게시글 목록 가져오기 (국가별)
// export const getPostsByCountry = async (postId: number) => {
//   const token = await AsyncStorage.getItem('Token');
//   console.log(token);
//   const res = await api.get(!postId ? `/api/board/posts` : `/api/board/posts/${postId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     }
//   });
//   return res;
// };
export const getPostsByCountry = async (countryId: number) => {
  const token = await AsyncStorage.getItem("Token");
  const res = await api.get(`/api/board/posts/${countryId}?page=0&keyword=`, {
    headers: { Authorization: `Bearer ${token}`},
  });
  return res;
}

//게시글 상세 조회
export const getPostDetail = async (postId: number) => {
  const token = await AsyncStorage.getItem("Token");
  const res = await api.get(`/api/board/post/${postId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res;
}

// 게시글 좋아요
// export const likePost = async (postId: number) => {
//   return await api.post(`/api/board/post/${postId}`);
// };
export const likePost = async (postId: number) => {
  const token = await AsyncStorage.getItem("Token");
  console.log(token);
  return await api.post(`/api/board/post/${postId}/like`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// 게시글 좋아요 취소
// export const unlikePost = async (postId: number) => {
//   return await api.delete(`/api/board/post/${postId}`);
// };
export const unlikePost = async (postId: number) => {
  const token = await AsyncStorage.getItem("Token");
  console.log(token);
  return await api.delete(`/api/board/post/${postId}/like`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const commentinfo = async (postId: number) => {
  return await api.get(`/api/comment/${postId}`)
}
