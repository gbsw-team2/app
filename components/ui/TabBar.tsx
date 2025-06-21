import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";

const TabBar = () => {
  const router = useRouter();
  const route = useRoute();
  const isBoardRoute = route.name.startsWith('board');
  const isMyPageRoute = route.name.startsWith('mypage');
  const isTranslateRoute = route.name.startsWith('translation')
  const [showTranslateOptions, setShowTranslateOptions] = useState(false);

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity onPress={() => router.push('/board')}>
        <View style={styles.tabItem}>
          <MaterialIcons name="chat" size={20} color={isBoardRoute ? "#3E7BC9" : "#989898"} />
          <Text style={[styles.tabText, isBoardRoute && styles.activeText]}>
            커뮤니티
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setShowTranslateOptions(!showTranslateOptions)}>
        <View style={styles.tabItem}>
          <MaterialIcons name="translate" size={20} color={isTranslateRoute ? "#3E7BC9" : "#989898"} />
          <Text style={[styles.tabText, isTranslateRoute && styles.activeText]}>번역</Text>
        </View>
      </TouchableOpacity>

      {showTranslateOptions && (
        <View style={styles.dropdownContainer}>
          <TouchableOpacity onPress={() => { router.push('/translation/voice'); setShowTranslateOptions(false); }}>
            <Text style={styles.option}>음성번역</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push('/'); setShowTranslateOptions(false); }}>
            <Text style={styles.option}>이미지번역</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { router.push('/'); setShowTranslateOptions(false); }}>
            <Text style={styles.option}>텍스트번역</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity onPress={() => router.push('/mypage/main')}>
        <View style={styles.tabItem}>
          <MaterialIcons name="account-circle" size={20} color={isMyPageRoute ? "#3E7BC9" : "#989898"} />
          <Text style={[styles.tabText, isMyPageRoute && styles.activeText]}>프로필</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: '#FAFAFA',
    borderTopColor: '#BDBDBD',
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#989898',
    marginTop: 2,
  },
  activeText: {
    color: '#3E7BC9',
    fontWeight: '500',
  },
  dropdownContainer: {
    position: 'absolute',
    bottom: 70, 
    left: '33%',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    zIndex: 999, 
  },

  option: {
    paddingVertical: 8,
    fontSize: 16,
    color: '#333',
  },
});

export default TabBar;
