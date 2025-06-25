import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import TabBar from '@/components/ui/TabBar';
import { Ionicons } from '@expo/vector-icons';

export default function ImageTranslate() {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scroll}>
                <View style={styles.header}>
                    <Text style={styles.title}>실시간 번역</Text>
                </View>

                <View style={styles.imageFrame}>
                </View>

                <View style={styles.bottomSection}>
                    <View style={styles.cameraButtonWrapper}>
                        <View style={styles.cameraButton}>
                            <Ionicons name="camera-outline" size={40} color="#3E7BC9" />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.translateButton}>
                        <Text style={styles.translateButtonText}>번역</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View>
                <TabBar />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        padding: 20,
        paddingTop: 60,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#3E7BC9',
    },
    scroll: {
        width: '100%',
        height: '100%',
    },
    imageFrame: {
        margin: 20,
        borderWidth: 2,
        borderColor: '#3E7BC9',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',

    },
    bottomSection: {
        alignItems: 'center',
        display: 'flex',
        marginTop: 20,
        marginBottom: 10,
    },
    cameraButtonWrapper: {
        marginBottom: 10,
    },
    cameraButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#d3d3d3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    translateButton: {
        backgroundColor: '#3E7BC9',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 6,
    },
    translateButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});