import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Services() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons name="hiking" size={40} color="white" />
                <Text style={styles.headerText}>Services</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.sectionBody}>
                    <Text style={styles.sectionTitle}>Our Services</Text>
                    <Text style={styles.sectionText}>
                        We offer guided hiking tours, equipment rentals, and adventure experiences.
                    </Text>

                    {/* Buttons */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Book Now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                        <Text style={styles.buttonText}>Contact Us</Text>
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
        height: 250,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginTop: 5,
    },
    content: {
        padding: 20,
        backgroundColor: "#EFDCAB",
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
