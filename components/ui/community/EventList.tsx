import React from "react";
import { View, StyleSheet, Text, Linking, Pressable, ScrollView } from "react-native";

type eventListProps = {
  title?: string;
  startDate?: string;
  endDate?: string;
  place?: string;
  link?: string;
};

const eventList: eventListProps[] = [
  {
    title: "제18회 마포나루 새우젓 축제",
    startDate: "2025-10-17",
    endDate: "2025-10-19",
    place: "월드컵공원 평화의 광장",
    link: "https://www.mapo.go.kr/site/maponarusf/content/mss240101",
  },
  {
    title: "당항포대첩축제",
    startDate: "2025-05-09",
    endDate: "2025-05-11",
    place: "당항포관광지",
  },
  {
    title: "이천도자기축제",
    startDate: "2025-04-25",
    endDate: "2025-05-06",
    place: "이천시 신둔면 예스파크",
    link: "http://www.ceramic.or.kr"
  }
];

const EventList: React.FC<eventListProps> = ({link}) => {
  const handlePress = (url?: string) => {
    if (url) {
      Linking.openURL(url).catch(err => console.error("링크 열기 실패: ", err));
    }
  };
  return (
    <View style={{padding: 16}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={styles.container}>
          {eventList.map((event, idx) => (
            <View key={idx} style={styles.eventCard}>
              <Text style={styles.title}>{event.title}</Text>
              <Text style={styles.info}>기간: {event.startDate}~{event.endDate}</Text>
              <Text style={styles.info}>장소: {event.place}</Text>
              {event.link && (
                <Pressable onPress={() => handlePress(event.link)}>
                  <Text style={styles.linkText}>자세한 정보</Text>
                </Pressable>
              )}
            </View>
          ))}
        </View>
      </ScrollView>    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
  },
  eventCard: {
    width: 260, 
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontSize: 14,
  },
  linkText: {
    fontSize: 14,
    color: "#525252",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
});

export default EventList;
