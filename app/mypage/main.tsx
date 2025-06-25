import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, ScrollView } from "react-native";
import BackHeader from "@/components/ui/BackHeader"
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { userinfo } from "@/api/auth";
import { Country } from "@/constants/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Main() {
    const router = useRouter();

    const [Name, setName] = useState<String>();
    const [CountryName, setCountryName] = useState<String>("");

    useEffect(() => {
      const info = async () => {
        const test = await userinfo();

        setName(test.data.name);

        const matchedCountry = Country.find(c => c.value === test.data.country);
        setCountryName(matchedCountry?.label ?? "알 수 없음");

      }

      info();
    })

    const handlelogout = () => {
      AsyncStorage.removeItem('Token');
      router.push("/auth/login")
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <BackHeader text="마이페이지"/>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.title}>
                    <Text style={{ color: '#3E7BC9', fontWeight: 'bold' }}>{Name}</Text>님 환영합니다
                </Text>

                <View style={styles.profilecontainer}>
                </View>

                <View style={styles.infobox}>
                      <Text style={styles.name}>{Name}</Text>
                      <Text style={styles.info}>{CountryName}</Text>
                      <Text style={styles.modify} onPress={() => router.push("/mypage/modify")}>수정하기</Text>
                </View>

                <View style={styles.menuBox}>
                    <View style={styles.answermenuItem}>
                        <Text style={[styles.menuText,{fontWeight:'500'}]}>112/119 긴급 신고</Text>
                        <TouchableOpacity style={styles.sosItem} onPress={() => router.push("/mypage/police")}>
                            <Text style={styles.sosText}>112(경찰서)문자신고</Text>
                            <AntDesign name="arrowright" color={'#3E7BC9'} size={12} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.sosItem} onPress={() => router.push("/mypage/hospital")}>
                            <Text style={styles.sosText}>119(소방서/병원)문자신고</Text>
                            <AntDesign name="arrowright" color={'#3E7BC9'} size={12} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/mypage/passwordmmodify")}>
                        <Text style={styles.menuText}>비밀번호 변경</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItem} onPress={() => router.push("/map/map")}>
                      <Text>지원시설 지도 표시</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.logocontainer}>
                    <Text style={styles.logotitle}>DOUMI</Text>
                    <Text style={styles.subtitle}>외국인을 더욱 편하게</Text>
                </View>
                
                <TouchableOpacity style={styles.logout} onPress={handlelogout}>
                    <Text style={styles.logoutText}>로그아웃</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>이용약관</Text>
                    <Text style={styles.footerText}>개인정보처리방침</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    scrollContent: {
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
    },
    profilecontainer: {
        alignItems: "center",
    },
    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
    },
    profiletext: {
        fontSize: 12,
        color: '#9F9F9F',
        marginTop: 8,
    },
    infobox: {
        marginTop: 20,
        width: '100%',
        padding: 16,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
    },
    name: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#555',
        marginBottom: 2,
    },
    phone: {
        fontSize: 14,
        color: '#3E7BC9',
        marginTop: 4,
    },
    modify: {
        fontSize: 12,
        color: '#888',
        marginTop: 8,
    },
    menuBox: {
        marginTop: 20,
        width: '100%',
    },
    menuItem: {
        backgroundColor: '#F0F0F0',
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
    },
    answermenuItem: {
        backgroundColor: '#F0F0F0',
        padding: 14,
        borderRadius: 8,
        marginBottom: 10,
    },
    menuText: {
        fontSize: 14,
        color: '#000',
    },
    logout: {
        alignItems: "center",
        marginTop: 30,
        marginBottom: 10,
    },
    logoutText: {
        fontSize: 16,
        fontWeight: '600',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: "space-evenly",
        width: '100%',
        marginTop: 20,
    },
    footerText: {
        fontSize: 12,
        color: '#666',
    },
    logocontainer: {
        padding: 20,
        paddingTop: 20,
    },
    logotitle: {
        fontSize: 48,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#898989',
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#898989',
    },
    sosItem: {
        backgroundColor: '#fff',
        marginTop: 8,
        paddingVertical: 12, 
        paddingHorizontal: 16, 
        borderRadius: 8, 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        flexDirection: 'row',
    },
    sosText: {
        color: '#3E7BC9',
        fontWeight: '500',
        fontSize: 14,
    },
});