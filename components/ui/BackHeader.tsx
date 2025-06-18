import { StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type headerProps = {
  text: string,
}

const BackHeader: React.FC<headerProps> = ({text}) => {
  const navigate = useNavigation();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigate.goBack()}><MaterialIcons name="arrow-back-ios" size={28} color={'#3E7BC9'} /></Pressable>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 32,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3E7BC9',
    lineHeight: 24,
  },
})

export default BackHeader;