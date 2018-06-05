import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class World extends Component {
  render() {
    return (
      <View
        style={{
          width: this.props.width / 2,
          height: this.props.width / 2,
          borderWidth: 0.5,
          borderColor: "#dddddd"
        }}
      >
        <View style={styles.worldImgTop}>
          <Image
            source={require("../../../assets/explore_world1.jpeg")}
            style={styles.worldImg}
          />
        </View>
        <View style={styles.worldImgBottom}>
          <Text style={styles.phgText}>Photographer</Text>
          <Text style={styles.nameText}>Name</Text>
          <Text style={styles.descText}>Description</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //   worldImgDimension: {
  //     width: this.props.width / 2,
  //     height: this.props.width / 2,
  //     borderWidth: 0.5,
  //     borderColor: "#dddddd"
  //   },
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
    fontSize: 14,
    color: "#b63838"
  },
  nameText: {
    fontSize: 12,
    fontWeight: "bold"
  },
  descText: {
    fontSize: 12
  }
});

export default World;
