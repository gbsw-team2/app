import { View, Text, TextInput, TouchableOpacity } from "react-native";
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
    <View>
      <Text>게시글 작성</Text>
      <TextInput
        placeholder="제목"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="내용"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>게시</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewPostScreen;
