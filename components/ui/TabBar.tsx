import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRoute } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const TabBar = () => {
  const router = useRouter();
  const route = useRoute();
  const isBoardRoute = route.name.startsWith('board');

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

      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="translate" size={20} color="#989898" />
          <Text style={styles.tabText}>번역</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={styles.tabItem}>
          <MaterialIcons name="account-circle" size={20} color="#989898" />
          <Text style={styles.tabText}>프로필</Text>
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
});

export default TabBar;
