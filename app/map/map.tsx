import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from "react-native";
import { useRouter } from 'expo-router';

export default function HomeScreen() {
    const router = useRouter();

    const locations = [
        { id: 1, name: "대구광역시지체장애인협회 군위군지회", distance: "8.2km", address: "대구 군위군 군위읍", status: "영업중" },
        { id: 2, name: "경북외국인다문화지원센터", distance: "26.2km", address: "경북 안동시 남후면", status: "영업중" },
        { id: 3, name: "대구 출입국외국인사무소 구미출장소", distance: "28.5km", address: "경북 구미시 신평동", status: "영업중" }
    ];

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.title}>지도</Text>
            </View>
            <View style={styles.mapcontainer}>
                <TouchableOpacity style={styles.refresh}>
                    <Text style={styles.label}>위치재설정</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.searchcontainer}>
                {locations.map((location) => (
                    <TouchableOpacity key={location.id} style={[styles.searchbox]}>
                        <Text style={styles.name}>{location.name}</Text>
                        <Text style={styles.details}>{location.distance} {location.address}</Text>
                        <Text style={styles.status}>{location.status}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff'
    },
    container: {
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff',
    },
    mapcontainer: {
        width: '100%',
        alignItems: "center",
        height: 370,
        backgroundColor: '#c1c1c1',
    },
    searchcontainer: {
        width: '100%',
        alignItems: "center",
        height: 280,
    },
    searchbox: {
        backgroundColor: '#ffffff',
        marginTop: 15,
        borderWidth: 1,
        borderColor: "#f5f5f5",
        borderRadius: 10,
        height: 70,
        width: "90%",
        padding: 10,
        justifyContent: 'center',
    },
    selectedBox: {
        borderColor: "#3E7BC9",
        borderWidth: 2,
    },
    refresh: {
        backgroundColor: '#ffffff',
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 300,
        height: 35,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#3E7BC9',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    details: {
        fontSize: 12,
        color: '#666',
    },
    status: {
        fontSize: 12,
        color: '#008000',
    },
});