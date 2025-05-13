import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";
import EventList from "@/components/ui/community/EventList";
import WriteList from "@/components/ui/community/WriteList";
import TabBar from "@/components/ui/TabBar";

const BoardScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>행사 리스트</Text>
        <EventList />
        <Text style={[styles.title, {marginTop:8, marginBottom:4}]}>게시글</Text>
        <View style={styles.boardList}>
          <WriteList />
          <TouchableOpacity style={styles.writeButton} onPress={() => router.push('/board/new')}>
            <Text style={styles.writeButtonText}>글쓰기</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <TabBar />
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
    paddingTop: 60,
  },
  title: {
    paddingLeft: 20,
    color: '#3E7BC9',
    fontSize: 16,
    fontWeight: '500',
  },
  boardList: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  writeButton: {
    position: 'absolute',
    bottom: 60, 
    right: 20,
    backgroundColor: '#3E7BC9',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  writeButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
})