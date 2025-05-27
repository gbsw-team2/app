import { StyleSheet, View, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const Comments = () => {
  //예시 데이터
  const comments = [
    { id: 1, name: 'Hiroshi', date: '2025-04-15', text: 'WoW 꿀팁 감사합니다 :)', isAuthor: false },
    { id: 2, name: 'Sophia', date: '2025-04-15', text: '넵 ㅎㅎ', isAuthor: true },
  ];
  
  return (
    <View style={styles.container}>
      <View style={styles.commentTitle}>
        <Text style={styles.commentText}>댓글</Text>
        <Text>12</Text>
      </View>
        <View>
          {comments.map((comment) => (
            <View
              key={comment.id}
              style={[
                styles.commentUser,
                comment.isAuthor && styles.myUser,
              ]}
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
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderColor: '#3E7BC9',
    borderWidth: 1.6,
    marginHorizontal: 'auto',
    marginTop: 16,
    padding: 10,
  },
  commentTitle: {
    gap: 4,
    flexDirection: 'row',
    marginBottom: 8,
  },
  commentText: {
    color: '#3E7BC9',
    fontWeight: '500'
  },
  commentUser: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 8,
  },
  myUser: {
    flexDirection: 'row-reverse',
  },
  commentContent: {
    flex: 1,
  },
  myCommentContent: {
    marginLeft: 0,
    alignItems: 'flex-end',
  },
})

export default Comments;