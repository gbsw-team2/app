import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

type WriteListItem = {
  title: string;
  likeCount: number;
  commentCount: number;
};

const writeList: WriteListItem[] = [
  {
    title: "한국 생활 꿀팁 (교통)",
    likeCount: 12,
    commentCount: 12,
  },
  {
    title: "한국 생활 꿀팁 (배달)",
    likeCount: 24,
    commentCount: 11,
  },
  {
    title: "한국어가 너무 어려워요 ㅠㅠ",
    likeCount: 8,
    commentCount: 32,
  },
  {
    title: "한국 사람 너무 빨라요",
    likeCount: 2,
    commentCount: 4,
  },
  {
    title: "태국인 찾습니다 저랑 친구해요 !",
    likeCount: 3,
    commentCount: 8,
  },
];

const WriteList: React.FC = () => {
  return (
    <ScrollView>
      {writeList.map((write, idx) => (
        <View key={idx} style={[styles.container, styles.border]}>
          <Text style={styles.text}>{write.title}</Text>
          <View style={styles.iconContainer}>
            <View style={styles.iconWithText}>
              <MaterialCommunityIcons
                name={idx === 1 ? "heart" : "heart-outline"} //임시로 2번째만 빨간 하트로 보이게 함
                size={20}
                color={idx === 1 ? "red" : "black"}
              />
              <Text style={styles.iconText}>{write.likeCount}</Text>
            </View>
            <View style={styles.iconWithText}>
              <MaterialIcons name="chat" size={20} color="#3E7BC9" />
              <Text style={styles.iconText}>{write.commentCount}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWithText: {
    alignItems: "center",
    marginLeft: 12,
  },
  iconText: {
    fontSize: 13,
    textAlign: 'center',
  },
  border: {
    alignSelf: 'center',     
    width: '90%',            
    borderBottomWidth: 0.8,
    borderColor: '#DCDCDC',
  }
});

export default WriteList;
