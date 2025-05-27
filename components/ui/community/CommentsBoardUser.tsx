import { View, StyleSheet, Text } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

const CommentsBoardUser = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons name="account-circle" size={32} color="#3E7BC9" />
      <View>
        <Text>Sophia</Text>
        <Text>2025-04-15</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginLeft: 20,
    marginTop: 12,
    alignItems: 'center',
  },
})

export default CommentsBoardUser;