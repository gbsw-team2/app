import { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Alert, TouchableOpacity } from "react-native"
import BackHeader from "@/components/ui/BackHeader"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import * as SMS from 'expo-sms';
import * as Location from 'expo-location';
import { userinfo } from "@/api/auth";
import { TextTranslate } from "@/api/text";

const Hospital = () => {

  const [number, setNumber] = useState<string>('01065752799')
  const [text, setText] = useState<string>('');
  const [isSend, setisSend] = useState<boolean>(false);

  const fetchData = async () => {
    const test = await userinfo();
    console.log(test.data.country);

    const trantest = await TextTranslate({ text: text, beforeLang: 'ko-KR', afterLang: 'zh-CN' });
    console.log(trantest);
  };

  useEffect(() => {
    if(text.length >= 1) {
      setisSend(true);
    }
    else {
      setisSend(false);
    }
  }, [text]);

  const sendSMS = async () => {
    try {
      fetchData();
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("위치 권한이 필요합니다.");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const messageWithLocation = `${text}\n\n[위치 정보]\nhttps://maps.google.com/?q=${latitude},${longitude}`;

      const { result } = await SMS.sendSMSAsync(number, messageWithLocation);
        if (result === 'sent') {
          Alert.alert('발송 성공')
        }
      } catch (error) {
          Alert.alert("문자발송중오류", String(error));
  }
}
  
  return (
    <View style={styles.Container}>
      <BackHeader text="119 문자신고"/>
      <View style={styles.ChatLocContainer}>
        <View style={styles.ChatContainer}>
          <View style={styles.ChatInputContainer}>
            <TextInput style={styles.ChatInput} placeholderTextColor='#BDBDBD' placeholder="메시지를 입력해주세요." onChangeText={setText}/>
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
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ChatInputContainer: {
    width: 320,
    height: 44,
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
    marginRight: 20,
  }
})

export default Hospital;