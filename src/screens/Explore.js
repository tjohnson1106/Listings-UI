import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Category from "../components/explore/Category";

const { height, width } = Dimensions.get("window");

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
          <ScrollView scrollEventThrottle={16}>
            <View style={styles.scrollTextView}>
              <Text style={styles.scrollText}>
                What are you looking for?
              </Text>
              <View style={styles.horizonContainer}>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../assets/explore_image1.jpeg")}
                    name="Home"
                  />
                  <Category
                    imageUri={require("../../assets/explore_image2.jpeg")}
                    name="Experience"
                  />
                  <Category
                    imageUri={require("../../assets/explore_image3.jpeg")}
                    name="Fire"
                  />
                </ScrollView>
              </View>
              <View style={styles.intro}>
                <Text style={styles.introText}>
                  Introducing Premium Services
                </Text>
                <Text style={styles.subIntro}>
                  A new selection of experiences for optical
                  enthusiasts
                </Text>
                <View style={styles.introImgContainer}>
                  <Image
                    source={require("../../assets/explore_image4.jpeg")}
                    style={styles.introImg}
                  />
                </View>
              </View>
            </View>
            <View style={styles.world}>
              <Text style={styles.worldText}>
                Images from around the world
              </Text>
              <View style={styles.worldImgRoot}>
                <View style={styles.worldImgDimension} />
                <View style={worldImgTop}>
                  <Image
                    source={require("../../explore_world1.jpeg")}
                    style={styles.worldImg}
                  />
                </View>
                <View style={worldImgBottom} />
              </View>
            </View>
          </ScrollView>
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
  },
  scrollTextView: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 20
  },
  scrollText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  horizonContainer: {
    height: 130,
    marginTop: 20
  },
  imgLower: {
    flex: 1
  },
  intro: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  introText: {
    fontSize: 24,
    fontWeight: "700"
  },
  subIntro: {
    fontWeight: "100",
    marginTop: 10
  },
  introImgContainer: {
    width: width - 40,
    height: 200,
    marginTop: 20
  },
  introImg: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: "cover",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#dddddd"
  },
  world: {
    marginTop: 40
  },
  worldText: {
    fontSize: 24,
    fontWeight: "700",
    paddingHorizontal: 20
  },
  worldImgRoot: {
    paddingHorizontal: 20,
    marginTop: 20
  },
  worldImgDimension: {
    width: width / 2,
    height: width / 2
  },
  worldImgTop: {
    flex: 1
  },
  worldImgBottom: {
    flex: 1
  },
  worldImg: {
    flex: 1,
    height: null,
    width: null
  }
});

export default Explore;
