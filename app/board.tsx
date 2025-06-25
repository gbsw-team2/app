import { SafeAreaView, View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { Dropdown } from "react-native-element-dropdown";
import EventList from "@/components/ui/community/EventList";
import WriteList from "@/components/ui/community/WriteList";
import TabBar from "@/components/ui/TabBar";
import { Country, DropdownItem } from "@/constants/User";
import { userinfo } from "@/api/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const BoardScreen = () => {

  const [selectedCountry, setSelectedCountry] = useState<number>(); 
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const test = await userinfo();
        setSelectedCountry(Number(test.data.country));
      } catch(e) {
        console.log(e);
      }
    };

    fetchData();
  }, []); 

  useEffect(() => {
    const fetchUserCountry = async () => {
      try {
        const userInfo = await AsyncStorage.getItem("User");
        if (userInfo) {
          const parsed = JSON.parse(userInfo);
          setSelectedCountry(parsed.country)
        }
      } catch (err) {
        console.log("국적 불러오기 실패: ", err);
      }
    }
    fetchUserCountry();
  }, [])
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
      <View style={{flexDirection: 'row'}}> 
        <Text style={styles.title}>행사 리스트</Text>
      </View>
        <EventList />
        <View style={{flexDirection: 'row', marginBottom: 12}}>
          <Text style={[styles.title, {marginTop:8, marginBottom:4}]}>게시글</Text>
          <Dropdown
            style={styles.countrySelect}
            data={Country}
            labelField="label"
            valueField="value"
            placeholder="국적선택"
            value={selectedCountry}
            onChange={(item: DropdownItem) => {
              setSelectedCountry(Number(item.value))}}
          />
        </View>
        <View style={styles.boardList}>
          <WriteList countryId={Number(selectedCountry)}/>
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
  countrySelect: {
    marginLeft: 8,
    marginVertical: 'auto',
    padding: 4,
    width: 120,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
})