import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Category extends Component {
  state = {};
  render() {
    return (
      <View style={styles.customContainer}>
        <View style={styles.imgUpper}>
          <Image source={this.props.imageUri} style={styles.img} />
        </View>
        <View style={styles.imgText}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customContainer: {
    height: 130,
    width: 130,
    marginLeft: 20,
    borderWidth: 0.5,
    borderColor: "#dddddd"
  },
  imgUpper: {
    flex: 2
  },
  imgText: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 10
  },
  img: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: "cover"
  }
});

export default Category;
