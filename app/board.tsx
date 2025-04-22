import { SafeAreaView, View, StyleSheet, Text } from "react-native"
import EventList from "@/components/ui/community/EventList";

const BoardScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>행사 리스트</Text>
        <EventList />
        <Text style={[styles.title, {marginTop:32}]}>게시글</Text>
      </View>
    </SafeAreaView>
  )
}

export default BoardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  title: {
    color: '#3E7BC9',
    fontWeight: '500',
    marginBottom: 8,
  }
})