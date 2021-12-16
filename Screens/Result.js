// Librairies
import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";

function Result(props) {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Home</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Result;
