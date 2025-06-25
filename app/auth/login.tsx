import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useState, useEffect } from "react";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; // 아이콘 추가
import { login, googleLogin } from "@/api/auth";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from 'expo-auth-session/providers/google';

export default function SignupScreen() {

  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const router = useRouter();

  const handleloginbutton = async () => {
    try {
      const res = await login({ email: id, password });

      AsyncStorage.setItem('Token', res.data.accessToken);

      if (res.status === 200) {
        console.log("로그인 성공");
        router.push('/board')
      } else if (res.status == 404) {
        console.log("존재하지 않는 이메일 입니다.");
      } else if (res.status == 401) {
        console.log("비밀번호가 일치하지 않습니다.");
      } else {
        console.log("로그인 실패", res.status);
      }
    } catch (e) {
      console.error("로그인 중 에러 발생:", e);
    }
  };

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '342906218695-k6m8a63pi0u9qmg6mtlar8fbicsvqmdg.apps.googleusercontent.com',
     redirectUri: 'https://api.gbsw-doumi.kro.kr/login/oauth2/google', // 백엔드에서 허용한 리디렉션 URI
    scopes: ['profile', 'email'],
  });


  useEffect(() => {
    console.log("Google OAuth response:", response); // <- 이게 뜨는지 확인
    const handleOAuthRedirect = async () => {
      if (response?.type === 'success') {
        const { authentication } = response;
        if (authentication?.accessToken) {
          try {
            const res = await googleLogin(authentication.accessToken);
            await AsyncStorage.setItem("Token", res.data.accessToken);
            router.push("/board");
          } catch (err) {
            console.error("구글 로그인 실패:", err);
          }
        }
      }
    };

    handleOAuthRedirect();
  }, [response]);

  const handleGoogleLogin = async () => {
    promptAsync(); // 구글 로그인 창 오픈
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.logocontainer}>
          <Text style={styles.title}>DOUMI</Text>
          <Text style={styles.subtitle}>외국인을 더욱 편하게</Text>
        </View>

        <Text style={styles.label}>아이디</Text>
        <TextInput style={styles.input} placeholder="예) doumi@example.com"
          value={id}
          onChangeText={setId}
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>비밀번호</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={setPassword}
            placeholder="비밀번호 입력"
            placeholderTextColor="#999"
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons name={isPasswordVisible ? "eye" : "eye-off"} size={24} color="gray" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleloginbutton}>
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>

        <View style={styles.linkContainer}>
          <TouchableOpacity style={styles.flexItem} onPress={() => router.push("/auth/signup")}>
            <Text style={styles.linkText}>회원가입</Text>
          </TouchableOpacity>

          <Text style={styles.separator}>|</Text>

          <TouchableOpacity style={styles.flexItem} onPress={() => router.push("/auth/forgot")}>
            <Text style={styles.linkText}>비밀번호 찾기</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.authbutton} onPress={handleGoogleLogin}>
          <FontAwesome name="google" size={20} color="black" style={styles.authIcon} />
          <Text style={styles.authbuttontext}>구글로 로그인</Text>
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
