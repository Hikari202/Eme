import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home() {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
              <Image source={require('@/assets/images/logo.jpg')}/>
                <MaterialIcons name="home" size={40} color="white" />
                <Text style={styles.headerText}>Home</Text>
            </View>
            <View style={styles.content}>
                <View style={styles.sectionBody}>
                    <Text style={styles.sectionTitle}>Welcome to Our Eme-eme App</Text>
                    <Text style={styles.sectionText}>
                        Explore our features and services to enhance your experience.
                    </Text>
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
        backgroundColor: "lightblue",
    },
    headerText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginTop: 5,
    },
    content: {
      padding: 10,
      backgroundColor: "#EFDCAB",
      marginTop: 250,
  },
    sectionBody: {
        backgroundColor: "#F2F6D0",
        padding: 20,
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    sectionText: {
        fontSize: 14,
        marginBottom: 5,
    },
});
