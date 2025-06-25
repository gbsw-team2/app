import React, { useEffect, useState } from "react"
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"
import { postComment } from "@/api/new" // 외부 API 호출 함수
import { useLocalSearchParams } from "expo-router"
import { commentinfo } from "@/api/boardList"

interface Comment {
  id: number | string
  name: string
  date: string
  text: string
  isAuthor: boolean
}

const Comments = () => {
  const [comments, setComments] = useState<Comment[]>([])
  const [input, setInput] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)

  const { id } = useLocalSearchParams();

  const handlePostComment = async () => {
    if (!input.trim()) {
      Alert.alert("댓글 내용을 입력해주세요.")
      return
    }

    setLoading(true)
    try {
      // postId와 input(body)를 넘겨야 함
      const response = await postComment(Number(id), { body: input })

      const newComment = response as {
        id?: number | string
        name?: string
        date?: string
        body: string
      }

      setComments((prev) => [
        ...prev,
        {
          id: newComment.id ?? prev.length + 1,
          name: newComment.name ?? "나",
          date: newComment.date ?? new Date().toISOString().slice(0, 10),
          text: newComment.body,
          isAuthor: true,
        },
      ])

      setInput("")
    } catch (error) {
      Alert.alert("댓글 등록 중 오류가 발생했습니다.")
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
  const fetchComments = async () => {
    try {
      const res = await commentinfo(Number(id));

      // res.data가 댓글 배열이라고 가정
      const commentsData = res.data.map((c: any) => ({
        id: c.id,
        text: c.body,
        name: "익명", // API에서 이름이 없으면 임의로 설정하거나 없으면 빈 문자열
        date: c.createdAt.slice(0, 10), // 날짜만 yyyy-mm-dd로 표시
        isAuthor: c.isWritten, // 본인 작성 여부 등 API에 맞게 설정
      }));

      setComments(commentsData);
    } catch (error) {
      console.error("댓글 불러오기 실패:", error);
    }
  };

  if (id) {
    fetchComments();
  }
}, [id]);


  return (
    <View style={styles.container}>
      <View style={styles.commentTitle}>
        <Text style={styles.commentText}>댓글</Text>
        <Text>{comments.length}</Text>
      </View>

      <ScrollView style={{ maxHeight: 300, marginBottom: 8 }}>
        {comments.map((comment) => (
          <View
            key={comment.id}
            style={[styles.commentUser, comment.isAuthor && styles.myUser]}
          >
            <MaterialIcons name="account-circle" size={32} color="#3E7BC9" />
            <View
              style={[
                styles.commentContent,
                comment.isAuthor && styles.myCommentContent,
              ]}
            >
              <Text>
                {comment.name} | {comment.date}
              </Text>
              <Text>{comment.text}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="댓글을 입력하세요"
          value={input}
          onChangeText={setInput}
          editable={!loading}
          multiline
        />
        <TouchableOpacity
          style={[styles.button, loading && { backgroundColor: "#999" }]}
          onPress={handlePostComment}
          disabled={loading}
        >
          <Text style={styles.buttonText}>
            {loading ? "등록 중..." : "등록"}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderColor: "#3E7BC9",
    borderWidth: 1.6,
    marginHorizontal: "auto",
    marginTop: 16,
    padding: 10,
  },
  commentTitle: {
    gap: 4,
    flexDirection: "row",
    marginBottom: 8,
  },
  commentText: {
    color: "#3E7BC9",
    fontWeight: "500",
  },
  commentUser: {
    flexDirection: "row",
    gap: 10,
    marginBottom: 8,
  },
  myUser: {
    flexDirection: "row-reverse",
  },
  commentContent: {
    flex: 1,
  },
  myCommentContent: {
    marginLeft: 0,
    alignItems: "flex-end",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  input: {
    flex: 1,
    borderColor: "#3E7BC9",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    fontSize: 14,
    maxHeight: 80,
  },
  button: {
    backgroundColor: "#3E7BC9",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
})

export default Comments
