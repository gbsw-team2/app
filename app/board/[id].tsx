import { View, StyleSheet } from "react-native"
import BackHeader from "@/components/ui/BackHeader"
import LookBoard from "@/components/ui/community/LookBoard"
import Comments from "@/components/ui/community/Comments"

const ViewScreen = () => {

  return (
    <View style={styles.container}>
      <BackHeader text="게시글"/>
      <LookBoard />
      <Comments />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
})

export default ViewScreen