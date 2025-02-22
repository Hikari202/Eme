import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function About() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>About</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.sectionBody}>
                    <Text style={styles.sectionTitle}>Discover Eme-eme App</Text>
                    <Text style={styles.sectionText}>
                        Eme-eme App is designed for fun and convenience, offering a smooth user experience.
                    </Text>
                    <Text style={styles.sectionText}>
                        Built with React Native, this app ensures seamless navigation and performance.
                    </Text>

                    {/* Buttons */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Learn More</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
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
        color: "white",
    },
    content: {
        padding: 20,
        backgroundColor: "#115c12",
        marginTop: 100,
    },
    sectionBody: {
        backgroundColor: "#F2F6D0",
        padding: 20,
        borderRadius: 10,
        alignItems: "center",
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 14,
        marginBottom: 10,
        textAlign: "center",
    },
    button: {
        backgroundColor: "#1E90FF",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: "80%",
        alignItems: "center",
    },
    buttonSecondary: {
        backgroundColor: "#FF6347",
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
    },
});

