import { View, StyleSheet, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { getPostDetail } from "@/api/boardList";

const LookBoard = () => {
  const { id } = useLocalSearchParams();
  const [post, setPost] = useState<any>(null);
  const [body, setBody] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [like, setlike] = useState<number>(0);
  const [isLike, setisLike] = useState<boolean>(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getPostDetail(Number(id));
        console.log("API 응답 데이터:", res.data);
        setPost(res.data);
        setTitle(res.data.title); 
        setBody(res.data.body);
        setlike(res.data.like)
        setisLike(res.data.isLike)

      } catch (err) {
        console.error("게시글 상세 조회 실패: ", err);
      }
    };
    if (id) fetchPost();
  }, [id]);

  useEffect(() => {
  console.log("제목:", title);
  console.log("본문:", body);
  console.log("좋아요 수:", like);
}, [title, body, like]);


  if (!post) return <Text>불러오는 중...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.text}>{body}</Text>
      <View style={styles.likeIcon}>
        <EvilIcons name="heart" size={44} color={isLike ? "red" : "gray"} />
        <Text style={{ marginTop: -8 }}>{like}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginTop: 16,
    padding: 20,
  },
  border: {
    borderBottomWidth: 0.8,
    borderColor: '#DCDCDC',
    paddingBottom: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#000',  // 검정색으로 변경
  },
  text: {
    paddingVertical: 20,
    fontSize: 16,
    lineHeight: 24,
    color: '#000',  // 검정색으로 변경
  },
  likeIcon: {
    alignItems: 'center',
  },
});

export default LookBoard;
