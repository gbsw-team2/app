import { View, Text, TextInput, TouchableOpacity, SafeAreaView,StyleSheet } from "react-native";
import { useState } from "react";
import BackHeader from "@/components/ui/BackHeader";

const NewWrite = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [contentError, setContentError] = useState<string>('');

  const handleSubmit = async () => {
    if (!title && !content) {
      alert("모든 항목을 입력해주세요..");
      return;
    }
    if (!title) {
      setTitleError('*제목을 입력해주세요')
    } else {
      setTitleError('')
    }
    if (!content) {
      setContentError('*내용을 입력해주세요')
    } else {
      setContentError('')
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <BackHeader text="글쓰기"/>
      <View style={styles.container}>
        <Text style={styles.label}>제목</Text>
        <TextInput
          value={title}
          onChangeText={setTitle}
          style={styles.input}
        />
        {titleError ? (
          <Text style={styles.errorText}>{titleError}</Text>
        ) : null}
        <Text style={styles.label}>내용</Text>
        <TextInput
          value={content}
          onChangeText={setContent}
          multiline
          style={[styles.input, {height:360}]}
        />
        {contentError ? (
          <Text style={styles.errorText}>{contentError}</Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>게시</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NewWrite;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    paddingHorizontal: 10,
    borderRadius: 5,
    padding: 0,
  },
  button: {
    backgroundColor: '#3E7BC9',
    marginTop: 'auto',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 13,
  },
})