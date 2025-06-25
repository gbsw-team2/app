import { View, Text, TextInput, TouchableOpacity, SafeAreaView,StyleSheet,KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import BackHeader from "@/components/ui/BackHeader";
import { Country, DropdownItem } from "@/constants/User";
import { newPost } from "@/api/new";
import { router } from "expo-router";

const update = () => {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [contentError, setContentError] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<number>(1);

  const handleSubmit = async () => {
    if (!title || !body) {
      if (!title) setTitleError('*제목을 입력해주세요');
      if (!body) setContentError('*내용을 입력해주세요');
      alert("모든 항목을 입력해주세요.");
      return;
    } else {
      setTitleError('');
      setContentError('');
    }
    
  
    const postData = {
      title,
      body,
      country: selectedCountry,
    };

    try {
      const response = await newPost(postData);
      console.log(response)

      if (response.status == 201) {
        alert("게시글이 성공적으로 등록되었습니다.");
        setTitle('');
        setBody('');
        router.push("/board");
      } else {
        alert("게시글 수정에 실패하였습니다.");
      }
    } catch (error) {
      console.error("Error posting data: ", error);
      alert("게시 중 오류가 발생하였습니다.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      // behavior={Platform.OS === "ios" ? "padding" : undefined}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
          value={body}
          onChangeText={setBody}
          multiline
          style={[styles.input, {height:360}]}
        />
        {contentError ? (
          <Text style={styles.errorText}>{contentError}</Text>
        ) : null}
        <Dropdown
            style={styles.countrySelect}
            data={Country}
            labelField="label"
            valueField="value"
            placeholder="국적선택"
            value={selectedCountry}
            onChange={(item: DropdownItem) => setSelectedCountry(Number(item.value))}
          />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>게시</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default update;

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
    marginTop: 8,
    marginBottom: 4,
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
  countrySelect: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'center',
    marginTop: 12,
    marginBottom: 10,
  },
})

