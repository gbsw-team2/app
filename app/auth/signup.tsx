import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import axios from 'axios';

export default function SignupScreen() {
  const [selectedEmail, setSelectedEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const emailData = [
    { label: 'gmail.com', value: 'gmail.com' },
    { label: 'naver.com', value: 'naver.com' },
    { label: 'icloud.com', value: 'icloud.com' },
    { label: 'kakao.com', value: 'kakao.com' },
    { label: 'daum.net', value: 'daum.net' },
    { label: 'hanmail.net', value: 'hanmail.net' },
  ];

  const countryData = [
    { label: '미국', value: '미국' },
    { label: '중국', value: '중국' },
    { label: '일본', value: '일본' },
    { label: '캐나다', value: '캐나다' },
    { label: '베트남', value: '베트남' },
    { label: '필리핀', value: '필리핀' },
    { label: '캄보디아', value: '캄보디아' },
    { label: '우즈베키스탄', value: '우즈베키스탄' },
    { label: '호주', value: '호주' },
    { label: '러시아', value: '러시아' },
    { label: '가나', value: '가나' },
  ];

  const handleSignUp = async () => {
    let isValid = true
    setConfirmPasswordError('')
    setEmailError('')
    if (!emailId || !selectedEmail || !password || !confirmPassword || !selectedCountry) {
      Alert.alert('모든 항목을 입력해 주세요!', 'Please enter all items!');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다 Password does not match');
      isValid = false
    }

    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (!regEmail.test(`${emailId}@${selectedEmail}`)) {
      setEmailError('올바른 이메일 형식이 아닙니다 The email format is not valid');
      isValid = false;
    }

    const regPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    if (!regPassword.test(password)) {
      setPasswordError('비밀번호는 영문, 숫자, 특수문자 포함 8자 이상이어야 합니다\nPassword must be 8+ characters with letters, numbers, and symbols');
      isValid = false;
    }

    if (isValid) return;

    const fullEmail = `${emailId}@${selectedEmail}`;

    const requestBody = {
      email: fullEmail,
      password: password,
      country: selectedCountry,
    };

    try {
      const response = await axios.post('http://백엔드/api/users', requestBody);
      Alert.alert('회원가입 성공', 'sign up successful');
      // 로그인 화면 이동 코드 작성
    } catch (error) {
      console.error(error);
      Alert.alert('회원가입 실패', 'sign up failed');      
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>회원가입</Text>

        <Text style={styles.label}>이메일주소</Text>
        <View style={styles.row}>
          <TextInput 
            style={[styles.input, { flex: 1 }]} 
            value={emailId} 
            onChangeText={(text) => {
              setEmailId(text);
              setEmailError(''); 
            }}/>
          <Text style={styles.symbol}>@</Text>
          <Dropdown
            style={[styles.dropdown, { flex: 2 }]}
            data={emailData}
            labelField="label"
            valueField="value"
            placeholder="이메일을 선택해주세요"
            value={selectedEmail}
            onChange={(item) => setSelectedEmail(item.value)}
          />
        </View>
        <View style={{marginTop: -12}}>
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
        </View>
        

        <Text style={styles.label}>비밀번호</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry value={password} 
          onChangeText={(text) => {
          setPassword(text);
          setPasswordError('');
        }}/>
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}

        <Text style={styles.label}>비밀번호 확인</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => {
            setConfirmPassword(text);
            setConfirmPasswordError('');
          }}
        />
        {confirmPasswordError ? (
          <Text style={styles.errorText}>{confirmPasswordError}</Text>
        ) : null}


        <Text style={styles.label}>국적</Text>
        <Dropdown
          style={styles.dropdown}
          data={countryData}
          labelField="label"
          valueField="value"
          placeholder="국적을 선택해주세요"
          value={selectedCountry}
          onChange={(item) => setSelectedCountry(item.value)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
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
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 16,
    height: 48,
    lineHeight: 48,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    marginTop: -5,
    fontSize: 13,
  },  
  dropdown: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 48,
    justifyContent: 'center',
    backgroundColor: '#fff',
    marginBottom: 10, 
  },  
  button: {
    backgroundColor: '#3E7BC9',
    marginTop: 20,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
