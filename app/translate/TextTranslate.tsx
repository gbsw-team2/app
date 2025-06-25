import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import TabBar from "@/components/ui/TabBar";
import api from "@/utils/api";

export default function TextTranslate() {
    const router = useRouter();
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [sourceLang, setSourceLang] = useState("ko-KR");
    const [targetLang, setTargetLang] = useState("vi-VN");

    const handleTranslate = async () => {
        if (!inputText.trim()) return;

        try {
            const response = await api.post("/api/translate/text", {
                text: inputText,
                beforeLang: sourceLang,
                afterLang: targetLang,
            });
            console.log(response.data);
            setTranslatedText(response.data);
        } catch (error) {
            console.error("번역 실패:", error);
            setTranslatedText("번역에 실패했습니다.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => router.back()}>
                        <Ionicons name="chevron-back" size={24} color="#3E7BC9" />
                    </TouchableOpacity>
                    <Text style={styles.title}>텍스트번역</Text>
                </View>

                {/* 원본 언어 선택 및 입력 */}
                <View style={styles.box}>
                    <Picker
                        selectedValue={sourceLang}
                        style={styles.picker}
                        onValueChange={(itemValue) => setSourceLang(itemValue)}
                        mode="dropdown"
                    >
                        <Picker.Item label="한국어" value="ko-KR" />
                        <Picker.Item label="영어" value="en-US" />
                    </Picker>

                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            multiline
                            placeholder="텍스트를 입력하세요"
                            value={inputText}
                            onChangeText={setInputText}
                            maxLength={3000}
                        />
                        <Text style={styles.counter}>{`${inputText.length}/3000`}</Text>
                        <TouchableOpacity style={styles.button} onPress={handleTranslate}>
                            <Text style={styles.buttonText}>번역하기</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/* 번역 언어 선택 및 결과 */}
                <View style={styles.box}>
                    <Picker
                        selectedValue={targetLang}
                        style={styles.picker}
                        onValueChange={(itemValue) => setTargetLang(itemValue)}
                        mode="dropdown"
                    >
                        <Picker.Item label="베트남어" value="vi-VN" />
                        <Picker.Item label="영어" value="en-US" />
                    </Picker>

                    <View style={styles.resultContainer}>
                        <Text style={styles.resultText}>{translatedText}</Text>
                    </View>
                </View>
            </ScrollView>

            <TabBar />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#F8F8F8",
    },
    scroll: {
        padding: 20,
        paddingTop: 60,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
        marginLeft: 5,
        color: "#3E7BC9",
    },
    box: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 15,
        marginBottom: 25,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    picker: {
        width: "100%",
        borderWidth: 0,
        marginBottom: 10,
    },
    inputContainer: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        marginTop: 10,
        backgroundColor: "#f9f9f9",
    },
    input: {
        minHeight: 120,
        textAlignVertical: "top",
        fontSize: 16,
        padding: 8,
    },
    counter: {
        textAlign: "right",
        marginTop: 6,
        color: "#888",
        fontSize: 12,
    },
    button: {
        marginTop: 10,
        alignSelf: "flex-end",
        backgroundColor: "#3E7BC9",
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 14,
    },
    resultContainer: {
        minHeight: 120,
        backgroundColor: "#f0f4f8",
        borderRadius: 8,
        padding: 12,
        marginTop: 10,
        justifyContent: "center",
    },
    resultText: {
        fontSize: 16,
        color: "#333",
        lineHeight: 24,
    },
});
