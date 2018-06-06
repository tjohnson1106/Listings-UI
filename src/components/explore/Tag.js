import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Tag extends Component {
  state = {};
  render() {
    return (
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>{this.props.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerTextWrapper: {
    minHeight: 20,
    minWidth: 40,
    padding: 5,
    backgroundColor: "white",
    borderColor: "#dddddd",
    borderWidth: 0.2,
    borderRadius: 1,
    marginRight: 5
  },
  headerText: {
    fontWeight: "700",
    fontSize: 10
  }
});

export default Tag;
