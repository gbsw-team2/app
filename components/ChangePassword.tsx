import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';
import { sendVerificationCode, verifyCode } from '@/api/auth';
import api from '@/utils/api';
import { Email } from "@/constants/User"; 
import type { DropdownItem } from "@/constants/User";

const ForgotPasswordScreen = () => {
  const [emailId, setEmailId] = useState('');
  const [emailDomain, setEmailDomain] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const fullEmail = `${emailId}@${emailDomain}`;

  const handleSendCode = async () => {
    if (!emailId || !emailDomain) {
      Alert.alert("오류", "이메일을 입력해주세요.");
      return;
    }

    try {
      await sendVerificationCode(fullEmail);
      setIsCodeSent(true);
      Alert.alert("성공", "인증 코드가 이메일로 전송되었습니다.");
    } catch (error) {
      console.error(error);
      Alert.alert("오류", "인증 코드 전송에 실패했습니다.");
    }
  };

  const handleVerifyCode = async () => {
    try {
      await verifyCode(fullEmail, verificationCode);
      setIsVerified(true);
      Alert.alert("성공", "인증되었습니다.");
    } catch (error) {
      console.error(error);
      Alert.alert("오류", "인증 코드가 일치하지 않습니다.");
    }
  };

  const handleResetPassword = async () => {
    if (!isVerified) {
      Alert.alert("오류", "이메일 인증을 먼저 완료해주세요.");
      return;
    }

    if (!newPassword || !confirmPassword) {
      Alert.alert("오류", "비밀번호를 입력해주세요.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("오류", "비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      
    } catch (error) {
      console.error(error);
      Alert.alert("오류", "비밀번호 재설정에 실패했습니다.");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>비밀번호 재설정</Text>

        <Text style={styles.label}>이메일</Text>
        <View style={styles.emailRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            value={emailId}
            onChangeText={setEmailId}
            placeholder="example"
          />
          <Text style={styles.atSymbol}>@</Text>
          <Dropdown
            style={[styles.dropdown, { flex: 1.5 }]}
            data={Email}
            labelField="label"
            valueField="value"
            placeholder="선택"
            value={emailDomain}
            onChange={(item: DropdownItem) => setEmailDomain(String(item.label))}
          />
        </View>

        <View style={styles.emailRow}>
          <TextInput
            style={[styles.input, { flex: 1 }]}
            placeholder="인증번호 입력"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="number-pad"
          />
          <TouchableOpacity
            style={styles.sendButton}
            onPress={isCodeSent ? handleVerifyCode : handleSendCode}
          >
            <Text style={styles.sendButtonText}>{isCodeSent ? "인증" : "전송"}</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>새 비밀번호</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
          placeholder="새 비밀번호 입력"
        />

        <Text style={styles.label}>비밀번호 확인</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholder="비밀번호 다시 입력"
        />

        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>비밀번호 재설정</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 16,
    paddingTop: 60,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#3E7BC9",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  emailRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  atSymbol: {
    fontSize: 16,
    fontWeight: "bold",
    marginHorizontal: 6,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 5,
    height: 48,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  sendButton: {
    backgroundColor: "#3E7BC9",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 6,
  },
  sendButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#3E7BC9",
    paddingVertical: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "600",
  },
});
