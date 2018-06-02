import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Explore extends Component {
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.containerAreaView}>
        <View style={styles.outerContainer}>
          <View style={styles.innerContainer}>
            <View style={styles.inputView}>
              <Icon name="ios-search" size={20} />
              <TextInput
                placeholder="Some Placeholder"
                placeholderTextColor="grey"
                style={styles.input}
                underlineColorAndroid="transparent"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerAreaView: {
    flex: 1
  },
  outerContainer: {
    flex: 1
  },
  innerContainer: {
    height: this.startHeaderHeight,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd"
  },
  inputView: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
    marginHorizontal: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 1,
    marginTop: Platform.OS === "android" ? 30 : null
  },
  input: {
    flex: 1,
    fontWeight: "700",
    backgroundColor: "white"
  }
});

export default Explore;
