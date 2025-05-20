import { View, StyleSheet, Text } from "react-native"
import { EvilIcons } from "@expo/vector-icons"


const LookBoard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>한국 생활 꿀팁 (교통)</Text>
      </View>
      <Text style={styles.text}>
        안녕하세요! 한국에 온 지 벌써 4년이 되었네요. 처음에는 모든 게 낯설고 어려웠지만 이제는 나름 한국 생활 전문가(?)가 된 것 같아요. 😂 그래서 오늘은 제가 직접 경험하면서 얻은 한국 생활 꿀팁들을 여러분과 공유하려고 합니다. 한국 생활에 적응하는 데 조금이나마 도움이 되길 바라요!
        
        교통: 대중교통 마스터하기 🚌 🚇 🚖

        교통카드 필수! 현금으로 내는 것보다 훨씬 저렴하고 편리해요. 티머니, 캐시비 등 다양한 종류가 있는데 편의점이나 지하철역에서 쉽게 구매하고 충전할 수 있습니다.
        지하철 노선 앱 활용: 복잡한 서울 지하철 앱 하나면 문제없어요! '카카오지하철', '지하철 종결자' 등 다양한 앱들이 실시간 운행 정보와 최적 경로를 제공해줍니다.
        택시 앱 적극 활용: '카카오택시', '타다' 등 택시 호출 앱을 이용하면 편리하게 택시를 잡을 수 있어요. 특히 밤늦게나 외진 곳에서 택시를 잡을 때 유용합니다.
        버스 환승 할인: 교통카드를 사용하면 버스-지하철, 버스-버스 간 환승 할인을 받을 수 있어요. 내릴 때 꼭 교통카드를 찍는 것을 잊지 마세요!
      </Text>
      <View style={styles.likeIcon}>
        <EvilIcons name="heart" size={44} />
        <Text>12</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 370,
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginHorizontal: 'auto',
    marginTop: 16,
    padding: 10,
  },
  border: {          
    borderBottomWidth: 0.8,
    borderColor: '#DCDCDC',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  text: {
    paddingVertical: 20,
  },
  likeIcon: {
    alignItems: 'center',
  }
})

export default LookBoard;