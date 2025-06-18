import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  // const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.title}>DOUMI</Text>
        <Text style={styles.subtitle}>외국인을 더욱 편하게</Text>
      </View>
      <View style={styles.authContainer}>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/signup')}>
          <Text style={styles.buttonText}>회원가입</Text>
        </TouchableOpacity>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>이미 계정이 있나요? </Text>
          {/* onPress={() => router.push('/auth/login')} */}
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text style={styles.loginLink}>로그인</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  authContainer: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3E7BC9',
    borderRadius: 10,
    width: '88%',
    height: 48,
    justifyContent: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginText: {
    fontSize: 14,
    fontWeight: '500',
  },
  loginLink: {
    fontSize: 14,
    color: '#3E7BC9',
    fontWeight: '600',
  },
});
