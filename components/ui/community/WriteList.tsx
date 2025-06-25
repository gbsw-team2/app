import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getPostDetail, getPostsByCountry, likePost, unlikePost } from "@/api/boardList";

type WriteListItem = {
  id: number,
  title: string,
  body: string,
  like: number,
  isLike: boolean,
  view: number,
  createdAt: string,
  updatedAt: string,
  isWritten: boolean,
  commentCount: number,
};

// const mockData: WriteListItem[] = [
//   {
//     id: 1,
//     title: "한국 생활 꿀팁 (교통)",
//     likeCount: 12,
//     commentCount: 12,
//     liked: false,
//   },
//   {
//     id: 2,
//     title: "한국 생활 꿀팁 (배달)",
//     likeCount: 24,
//     commentCount: 11,
//     liked: true,
//   },
//   {
//     id: 3,
//     title: "한국어가 너무 어려워요 ㅠㅠ",
//     likeCount: 8,
//     commentCount: 32,
//     liked: false,
//   },
// ];

const WriteList: React.FC<{ countryId: number }> = ({ countryId }) => {
  const router = useRouter();
  const [writeList, setWriteList] = useState<WriteListItem[]>([]);

   const fetchPostById = async (postId: number) => {
    try {
      const res = await getPostDetail(postId);
      return res.data; // API 응답 구조에 따라 조정
    } catch (err) {
      console.error(`게시글 ${postId} 정보 불러오기 실패`, err);
      return null;
    }
  };

  useEffect(() => {
    // setWriteList(mockData);
    const fetchPosts = async () => {
      try {
        const response = await getPostsByCountry(countryId);
        const postList = response.data.content;

        // 모든 post의 상세 정보 받아오기
        const detailedPosts = await Promise.all(
          postList.map(async (post: any) => {
            const detail = await fetchPostById(post.id);
            return {
              ...post,
              like: detail?.like ?? post.like,
              isLike: detail?.isLike ?? post.isLike,
              // 필요한 다른 필드들도 병합
            };
          })
        );

        setWriteList(detailedPosts);
      } catch (err) {
        console.error("게시글 목록 불러오기 실패", err);
      }
    };

    // fetchPosts();
    if (countryId) fetchPosts();
  }, [countryId]);

  const viewLike = async (postId: number, liked: boolean) => {
    try {
      if (liked) {
        await unlikePost(postId);
      } else {
        await likePost(postId);
      }

      // 서버 응답 성공했으면 바로 상태 수정
      setWriteList(prev =>
        prev.map(post =>
          post.id === postId
            ? {
                ...post,
                isLike: !liked,
                like: liked ? post.like - 1 : post.like + 1,
              }
            : post
        )
      );
    } catch (err) {
      console.error("좋아요 토글 실패:", err);
    }
  };


  // const viewLike = (postId: number, liked: boolean) => {
  //   setWriteList(prev =>
  //     prev.map(post =>
  //       post.id === postId
  //         ? {
  //             ...post,
  //             liked: !liked,
  //             likeCount: liked ? post.likeCount - 1 : post.likeCount + 1,
  //           }
  //         : post
  //     )
  //   );
  // };

  return (
    <ScrollView>
      {writeList.map((write) => (
        <View key={write.id} style={[styles.container, styles.border]} >
          <Text onPress={() => router.push({ pathname: "/board/[id]", params: { id: String(write.id) },} as any)} style={styles.text}>{write.title}</Text>
          <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => viewLike(write.id, write.isLike)}>
            <View style={styles.iconWithText}>
              <MaterialCommunityIcons
                name={write.isLike ? "heart" : "heart-outline"}
                color={write.isLike ? "red" : "black"}
                size={20}
              />
              <Text style={styles.iconText}>{write.like}</Text>
            </View>
          </TouchableOpacity>
          {write.commentCount !== undefined && (
            <View style={styles.iconWithText}>
              <MaterialIcons name="chat" size={20} color="#3E7BC9" />
              <Text style={styles.iconText}>{write.commentCount}</Text>
            </View>
          )}
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWithText: {
    alignItems: "center",
    marginLeft: 12,
  },
  iconText: {
    fontSize: 13,
    textAlign: 'center',
  },
  border: {
    alignSelf: 'center',     
    width: '90%',            
    borderBottomWidth: 0.8,
    borderColor: '#DCDCDC',
  }
});

export default WriteList;
