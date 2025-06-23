import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { getPostsByCountry, likePost, unlikePost } from "@/api/boardList";

type WriteListItem = {
  id: number;
  title: string;
  likeCount: number;
  commentCount: number;
  isLike: boolean;
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

  useEffect(() => {
    // setWriteList(mockData);
    const fetchPosts = async () => {
      try {
        const response = await getPostsByCountry(countryId);
        console.log(response);
        setWriteList(response.data)
      } catch (err) {
        console.error("게시글 목록 불러오기 실패", err);
      }
    }
    fetchPosts();
  }, []);

  const viewLike = async (postId: number, liked: boolean) => {
    try {
      if (liked) {
        await unlikePost(postId);
      } else {
        await likePost(postId)
      }
      setWriteList(prev =>
        prev.map(post =>
          post.id === postId
          ? {
            ...post,
            liked: !liked,
            likeCount: liked ? post.likeCount - 1 : post.likeCount + 1,
          }
        : post
      )
    )
  } catch (err) {
      console.error("실패: ", err)
    }
  }
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
          <Text onPress={() => router.push({pathname: "/board/view[id]", params: {id: String(write.id)}, }as any)} style={styles.text}>{write.title}</Text>
          <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => viewLike(write.id, write.isLike)}>
            <View style={styles.iconWithText}>
              <MaterialCommunityIcons
                name={write.isLike ? "heart" : "heart-outline"}
                color={write.isLike ? "red" : "black"}
                size={20}
              />
              <Text style={styles.iconText}>{write.likeCount}</Text>
            </View>
          </TouchableOpacity>
            <View style={styles.iconWithText}>
              <MaterialIcons name="chat" size={20} color="#3E7BC9" />
              <Text style={styles.iconText}>{write.commentCount}</Text>
            </View>
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
