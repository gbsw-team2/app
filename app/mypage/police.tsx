import { View, StyleSheet, TextInput } from "react-native"
import BackHeader from "@/components/ui/BackHeader"
import { MaterialCommunityIcons } from "@expo/vector-icons"


const police = () => {
  return (
    <View style={styles.Container}>
      <BackHeader text="112 문자신고"/>
      <View style={styles.ChatLocContainer}>
        <View style={styles.ChatContainer}>
          <View style={styles.ChatCamara}>
            <MaterialCommunityIcons 
              name="camera"
              color="blue"
              size={20}
            />
          </View>
          <View style={styles.ChatInputContainer}>
            <TextInput style={styles.ChatInput} placeholderTextColor='#BDBDBD' placeholder="메시지를 입력해주세요."/>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  ChatLocContainer: {
    position: 'absolute',
    bottom: 0, 
    width: '100%', 
  },
  ChatContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    // marginLeft: 12/
  },
  ChatCamara: {
    width: 32,
    height: 32,
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EBECFF',
    marginLeft: 16,
  },
  ChatInputContainer: {
    width: 306,
    height: 36,
    marginLeft: 12,
    backgroundColor: '#EFEFEF',
    borderRadius: 99,
    justifyContent: 'center'
  },
  ChatInput: {
    width: '90%',
    marginLeft: 12,
    fontWeight: 'semibold',
    fontSize: 16
  }
})

export default police;