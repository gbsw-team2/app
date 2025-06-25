import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Linking, Pressable, ScrollView, ActivityIndicator  } from "react-native";
import { fetchEventList, EventItem } from "@/api/eventList";

const EventList: React.FC = () => {
  const [eventList, setEventList] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);

  const handlePress = (url?: string) => {
    if (url) {
      Linking.openURL(url).catch(err => console.error("링크 열기 실패: ", err));
    }
  };

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const data = await fetchEventList();
        setEventList(data);
      } catch (error) {
        console.error("행사정보불러오기실패", error)
      } finally {
        setLoading(false)
      }
    }
    loadEvents();
  }, [])

  if (loading) {
    return <ActivityIndicator size="small" style={{ marginTop: 20 }} />
  }

  return (
    <View style={{padding: 16}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        <View style={styles.container}>
          {eventList.map((event) => (
            <View style={styles.eventCard}>
              <Text style={styles.title}>{event.fstvlNm}</Text>
              <Text style={styles.info}>기간: {event.fstvlStartDate}~{event.fstvlEndDate}</Text>
              <Text style={styles.info}>장소: {event.opar}</Text>
              {event.homepageUrl && (
                <Pressable onPress={() => handlePress(event.homepageUrl)}>
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
    gap: 8,
  },
  eventCard: {
    width: 260, 
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 13,
    fontWeight: "bold",
    marginBottom: 4,
  },
  info: {
    fontSize: 12,
  },
  linkText: {
    fontSize: 11,
    color: "#525252",
    alignSelf: "flex-end",
    textDecorationLine: "underline",
  },
});

export default EventList;
