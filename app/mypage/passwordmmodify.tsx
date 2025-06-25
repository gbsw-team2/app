import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from "react-native";
import { useState } from "react";
import { Dropdown } from 'react-native-element-dropdown';
import { router } from "expo-router";
import type { FC } from 'react';
import { sendVerificationCode, verifyCode, signup } from '@/api/auth';
import { Email, Country, DropdownItem } from "@/constants/User";
import { userpasswordmodify } from "@/api/auth";

const PasswordModifyScreen: FC = () => {

  const [password, setPassword] = useState<string>('');

  const handleModify = async () => {
    const res = await userpasswordmodify({password});
    if(res.status == 200) {
      router.back()
      Alert.alert("정상적으로 처리되었습니다.")
    } else {
      Alert.alert("에러 발생")
    }
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>정보 수정</Text>

        <Text style={styles.label}>비밀번호</Text>
        <TextInput 
          style={styles.input} 
          secureTextEntry
          onChangeText={(text) => {
          setPassword(text);
        }}/>

        <TouchableOpacity style={[styles.button, {marginTop: "auto"}]} onPress={handleModify}>
          <Text style={styles.buttonText}>수정</Text>
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

export default PasswordModifyScreen;