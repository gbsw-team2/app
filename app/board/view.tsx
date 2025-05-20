import { View, StyleSheet } from "react-native"
import BackHeader from "@/components/ui/BackHeader"
import BoardUser from "@/components/ui/community/BoardUser"
import LookBoard from "@/components/ui/community/LookBoard"

const ViewScreen = () => {
  return (
    <View>
      <BackHeader text="게시글"/>
      <BoardUser />
      <LookBoard />
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ViewScreen