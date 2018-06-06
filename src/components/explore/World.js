import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class World extends Component {
  render() {
    return (
      //this.props not working in stylesheet
      <View
        style={{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 30,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={styles.worldImgTop}>
          <Image source={this.props.source} style={styles.worldImg} />
        </View>
        <View style={styles.worldImgBottom}>
          <Text style={styles.phgText}>
            {this.props.photographer}
          </Text>
          <Text style={styles.titleText}>{this.props.title}</Text>
          <Text style={styles.descText}>
            {this.props.description}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //this.props not working in stylesheet property below
  //   worldImgDimension: {},
  worldImgTop: {
    flex: 1
  },
  worldImgBottom: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "space-evenly",
    paddingLeft: 10
  },
  worldImg: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover"
  },
  phgText: {
    fontSize: 10,
    color: "#b63838"
  },
  titleText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  descText: {
    fontSize: 10
  }
});

export default World;
