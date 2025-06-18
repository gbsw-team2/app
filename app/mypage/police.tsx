import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native"
import BackHeader from "@/components/ui/BackHeader"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as SMS from 'expo-sms';


const police = () => {

  const [number, setNumber] = useState<string>('01076125972')
  const [text, setText] = useState<string>('');
  const [isSend, setisSend] = useState<boolean>(false);

  useEffect(() => {
    if(text.length >= 1) {
      setisSend(true);
    }
    else {
      setisSend(false);
    }
  }, [text]);

  const sendSMS = async () => {
    const { result } = await SMS.sendSMSAsync(number, text);
      if (result === 'sent') {
        Alert.alert('발송 성공')
      }
  }
  

  const handleInputChange = (e : any) => {
    setText(e.target.value);
  };

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
            <TextInput style={styles.ChatInput} placeholderTextColor='#BDBDBD' placeholder="메시지를 입력해주세요." onChange={handleInputChange}/>
          </View>
          <TouchableOpacity style={styles.ChatSendButton} onPress={sendSMS}> 
            <MaterialCommunityIcons 
                name="arrow-up"
                color={isSend ? "blue" : "gray"}
                size={20}
              />
          </TouchableOpacity>
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
    width: 286,
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
  },
  ChatSendButton: {
    marginLeft: 10,
  }
})

export default police;