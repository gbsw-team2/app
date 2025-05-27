import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; // 아이콘 추가

export default function SignupScreen() {
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Text style={styles.title}>DOUMI</Text>
          <Text style={styles.subtitle}>외국인을 더욱 편하게</Text>
        </View>

        <Text style={styles.label}>아이디</Text>
        <TextInput style={styles.input} placeholder="예) doumi@example.com" />

        <Text style={styles.label}>비밀번호</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            placeholder="비밀번호 입력"
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.flexItem}>
            <Text style={styles.linkText}>회원가입</Text>
          </TouchableOpacity>

          <Text style={styles.separator}>|</Text>

          <TouchableOpacity style={styles.centerItem}>
            <Text style={styles.linkText}>이메일 찾기</Text>
          </TouchableOpacity>

          <Text style={styles.separator}>|</Text>

          <TouchableOpacity style={styles.flexItem}>
            <Text style={styles.linkText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.authbutton}>
          <FontAwesome name="google" size={20} color="black" style={styles.authIcon} />
          <Text style={styles.authbuttontext}>구글로 로그인</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.authbutton}>
          <FontAwesome name="apple" size={20} color="black" style={styles.authIcon} />
          <Text style={styles.authbuttontext}>Apple로 로그인</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    padding: 20,
    paddingTop: 60,
  },
  logocontainer: {
    padding: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 48,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#3E7BC9',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
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
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    height: 48,
    marginBottom: 10,
  },
  passwordInput: {
    flex: 1,
    height: "100%",
  },
  iconContainer: {
    padding: 10,
  },
  button: {
    backgroundColor: '#3E7BC9',
    marginTop: 20,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authbutton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#b9b9b9",
    borderRadius: 10,
    height: 50,
    width: "100%",
    position: "relative",
  },
  authIcon: {
    position: "absolute",
    left: 15,
  },
  authbuttontext: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  buttonText: { 
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  flexItem: {
    flex: 1,
    alignItems: 'center',
  },
  centerItem: {
    flex: 1.2,
    alignItems: 'center',
  },
  linkText: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  separator: {
    fontSize: 14,
    color: '#BDBDBD',
  },
});