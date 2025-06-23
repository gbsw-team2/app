import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import BackHeader from '@/components/ui/BackHeader';

const voiceResults = () => {
  return (
    <SafeAreaView style={styles.container}>
      <BackHeader text="음성번역"/>
      <View style={styles.container}>
        <View style={[styles.section, {marginTop: 20}]}>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>한국어</Text>
          </View>
          <TextInput
            style={styles.textBox}
            multiline
            value="안녕하세요"
            editable={false}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>베트남어</Text>
          </View>
          <TextInput
            style={styles.textBox}
            multiline
            value="Xin chào"
            editable={false}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>다시하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 40,
  },
  languageTag: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFF',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 6,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    marginBottom: 8,
    marginHorizontal: 'auto',
  },
  languageText: {
    fontSize: 14,
    fontWeight: '500',
  },
  textBox: {
    backgroundColor: '#FFF',
    borderRadius: 6,
    height: 160,
    padding: 10,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#3E7BC9',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 'auto',
    width: 120,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default voiceResults;
