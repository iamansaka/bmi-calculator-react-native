// Librairies
import React from "react";
import { View, StatusBar, SafeAreaView, Text, StyleSheet } from "react-native";

function Home(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Home</Text>
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFAFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
