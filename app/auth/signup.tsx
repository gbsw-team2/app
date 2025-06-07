import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { useRouter } from 'expo-router';
import type { FC } from 'react';
import { sendVerificationCode, verifyCode, signup } from "../api/auth";
import { Email, Country, DropdownItem } from "@/constants/User";

const SignupScreen: FC = () => {
  const router = useRouter();

  const [userName, setUserName] = useState<string>('');
  const [selectedEmail, setSelectedEmail] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('');
  const [emailId, setEmailId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [isCodeSent, setIsCodeSent] = useState<boolean>(false);
  const [userCode, setUserCode] = useState<string>('');
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [guardianPhone, setGuardianPhone] = useState<string>('');

  const handleSendCode = async () => {
    if (!emailId || !selectedEmail) {
      setEmailError('이메일을 입력해주세요.');
      return;
    }
  
    const fullEmail = `${emailId}@${selectedEmail}`;
    try {
      const response = await sendVerificationCode(fullEmail);
      if (response.data.success) {
        setIsCodeSent(true);
        Alert.alert('인증번호가 발송되었습니다!');
      } else {
        Alert.alert('인증번호 발송 실패');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('오류 발생');
    }
  };

  const handleVerifyCode = async () => {
    if (!userCode) {
      Alert.alert('인증번호를 입력해주세요.');
      return;
    }
  
    const fullEmail = `${emailId}@${selectedEmail}`;
    try {
      const response = await verifyCode(fullEmail, userCode);
      if (response.data.success) {
        setIsVerified(true);
        Alert.alert('이메일 인증 성공');
      } else {
        Alert.alert('인증번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('서버 오류');
    }
  };

  const handleSignUp = async (): Promise<void> => {
    let isValid = true
    if (!isVerified) {
      Alert.alert('이메일 인증을 완료해주세요.')
      return
    }
    setConfirmPasswordError('')
    setEmailError('')
    if (!userName || !emailId || !selectedEmail || !password || !confirmPassword || !selectedCountry) {
      Alert.alert('모든 항목을 입력해 주세요!');
      return;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('비밀번호가 일치하지 않습니다');
      isValid = false
    }

    const regEmail = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    if (!regEmail.test(`${emailId}@${selectedEmail}`)) {
      setEmailError('올바른 이메일 형식이 아닙니다');
      isValid = false;
    }

    const regPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    if (!regPassword.test(password)) {
      setPasswordError('비밀번호는 영문, 숫자, 특수문자 포함 8자 이상이어야 합니다');
      isValid = false;
    }

    if (!isValid) return;

    const fullEmail = `${emailId}@${selectedEmail}`;

    const requestBody = {
      name: 'placeholder',
      email: fullEmail,
      password: password,
      country: selectedCountry,
      guardianPhone: guardianPhone, 
    };
    

    try {
      const response = await signup(requestBody);
      Alert.alert('회원가입 성공');
      //로그인 화면으로 이동
    } catch (error) {
      console.error(error);
      Alert.alert('회원가입 실패');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>회원가입</Text>

        <Text style={styles.label}>이름</Text>
        <TextInput 
          style={styles.input} 
          onChangeText={(text) => {
          setUserName(text);
        }}/>
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
            data={Email}
            labelField="label"
            valueField="value"
            placeholder="이메일선택"
            value={selectedEmail}
            onChange={(item: DropdownItem) => setSelectedEmail(item.value)}
          />
        </View>
        <View style={{marginTop: -12}}>
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
            ) : null}
        </View>
        <View style={styles.row}>
          {!isCodeSent ? (
            <>
              <TextInput 
                style={[styles.input, {flex: 1, marginRight:16}]}
                value={userCode}
                onChangeText={setUserCode}
                keyboardType="number-pad"
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
                <Text style={styles.buttonText}>인증번호 발송</Text>
              </TouchableOpacity>
            </>
            
          ) : (
            <>
              <TextInput 
                style={[styles.input, {flex: 1, marginRight:16}]}
                value={userCode}
                onChangeText={setUserCode}
                keyboardType="number-pad"
              />
              <TouchableOpacity style={[styles.sendButton]} onPress={handleVerifyCode}>
                <Text style={[styles.buttonText]}>인증</Text>
              </TouchableOpacity>
            </>          
          )}
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
          data={Country}
          labelField="label"
          valueField="value"
          placeholder="국적선택"
          value={selectedCountry}
          onChange={(item: DropdownItem) => setSelectedCountry(item.value)}
        />

        <Text style={styles.label}>보호자 연락처(선택)</Text>
        <TextInput
          style={styles.input}
          keyboardType="phone-pad"
          value={guardianPhone}
          onChangeText={setGuardianPhone}
        />

        <TouchableOpacity style={[styles.button, {marginTop: "auto"}]} onPress={handleSignUp}>
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
    marginBottom: 10,
    padding: 0,
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
    paddingHorizontal: 12,
  },
  sendButton: {
    backgroundColor: '#3E7BC9',
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
    flexShrink: 0,
    marginTop: -8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignupScreen;