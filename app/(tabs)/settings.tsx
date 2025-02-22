import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Settings() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Settings</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.sectionBody}>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text>Edit Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text>Privacy and Security</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text>Notifications</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sectionItem}>
                        <Text>Help & Support</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#115c12",
    },
    header: {
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
    },
    content: {
        padding: 20,
        backgroundColor: "#EFDCAB",
    },
    sectionBody: {
        backgroundColor: "#F2F6D0",
        padding: 20,
        borderRadius: 10,
    },
    sectionItem: {
        padding: 15,
        backgroundColor: "#fff",
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
});
