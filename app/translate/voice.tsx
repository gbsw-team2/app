import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Alert } from 'react-native';
import BackHeader from '@/components/ui/BackHeader';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { sendAudioTranslation } from '@/api/voice';
import { Audio } from 'expo-av';
import TabBar from '@/components/ui/TabBar';


const VoiceTranslateScreen = () => {
  
  const [fromLang, setFromLang] = useState('ko');
  const [toLang, setToLang] = useState('vi');
  const [File, setFile] = useState<any>(null);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);

  const languages = [
    { code: 'ko', name: '한국어' },
    { code: 'vi', name: '베트남어' },
    { code: 'en', name: '영어' },
    { code: 'ja', name: '일본어' },
    { code: 'zh-CN', name: '중국어(간체)' },
    { code: 'fr', name: '프랑스어' },
  ];

  const toggleRecording = async () => {
    if (recording) {
      // 🔴 녹음 종료
      await recording.stopAndUnloadAsync();
      const uri = recording.getURI();
      setRecording(null);
  
      if (uri) {
        const audioFile = {
          uri,
          name: 'voice.m4a',
          type: 'audio/x-m4a'
        };
  
        try {
          const response = await sendAudioTranslation(audioFile, fromLang, toLang);
          if (response.status === 200) {
            Alert.alert('번역 완료!');
          } else {
            Alert.alert('서버 오류');
          }
        } catch (error) {
          console.error(error);
          Alert.alert('전송 실패');
        }
      }
    } else {
      // 🟢 녹음 시작
      try {
        const { granted } = await Audio.requestPermissionsAsync();
        if (!granted) {
          Alert.alert('마이크 권한이 필요합니다.');
          return;
        }
  
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
  
        const { recording } = await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );
  
        setRecording(recording);
      } catch (err) {
        console.error('녹음 실패:', err);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <BackHeader text="음성번역"/>

      <View style={styles.micContainer}>
        <TouchableOpacity style={styles.micButton} onPress={toggleRecording}>
          <MaterialCommunityIcons name={recording ? "stop" : "microphone-outline"} size={50} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
      <Dropdown
          style={styles.dropdown}
          data={languages}
          labelField="name"
          valueField="code"
          placeholder="언어 선택"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          value={fromLang}
          onChange={item => {
            setFromLang(item.code);
          }}
        />

        <Text style={styles.arrow}>⇄</Text>

        <Dropdown
          style={styles.dropdown}
          data={languages}
          labelField="name"
          valueField="code"
          placeholder="언어 선택"
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          value={toLang}
          onChange={item => {
            setToLang(item.code);
          }}
        />
        </View>
        <View style={{ bottom:0, left:0, marginTop: 360}}>
          <TabBar />
        </View>
    </SafeAreaView>
  );
};

export default VoiceTranslateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
    color: '#3E7BC9',
  },
  micContainer: {
    alignItems: 'center',
    marginBottom: 80,
    marginTop: 120,
  },
  micButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3E7BC9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#3E7BC9',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginHorizontal: 12,
  },
  languageText: {
    color: '#000',
    fontWeight: '500',
  },
  dropdown: {
    width: 140,
    height: 44,
    borderColor: '#3E7BC9',
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#999',
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#000',
  },
  arrow: {
    fontSize: 18,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
