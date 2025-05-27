import { View, StyleSheet } from "react-native"
import BackHeader from "@/components/ui/BackHeader"
import BoardUser from "@/components/ui/community/BoardUser"

const ViewScreen = () => {
  return (
    <View>
      <BackHeader text="게시글"/>
      <BoardUser />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ViewScreen