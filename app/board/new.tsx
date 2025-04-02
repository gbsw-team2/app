import { View, Text, TextInput, TouchableOpacity, SafeAreaView,StyleSheet } from "react-native";
import { useState } from "react";

const NewPostScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async () => {
    if (!title || !content) {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>글쓰기</Text>
        <Text style={styles.label}>제목</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
        />
        <Text>내용</Text>
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>게시</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewPostScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3E7BC9',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  }
})