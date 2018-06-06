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
  Dimensions,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import Category from "../components/explore/Category";
import World from "../components/explore/World";
import Tag from "../components/explore/Tag";

const { height, width } = Dimensions.get("window");

class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    if (Platform.OS === "android") {
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
      this.endHeaderHeight = 70 + StatusBar.currentHeight;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animatedOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });
    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-30, 10],
      extrapolate: "clamp"
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.containerAreaView}>
        <View style={styles.outerContainer}>
          <Animated.View style={styles.innerContainer}>
            <View style={styles.inputView}>
              <Icon name="ios-search" size={20} />
              <TextInput
                placeholder="search experiences"
                placeholderTextColor="grey"
                style={styles.input}
                underlineColorAndroid="transparent"
              />
            </View>
            <Animated.View style={styles._animatedHeader}>
              <Tag name="Collections" />
              <Tag name="Photos" />
            </Animated.View>
          </Animated.View>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
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
                    name="Friends"
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
                  Introducing Collections
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
                <World
                  width={width}
                  photographer="Forest Silva"
                  title="The World"
                  description="A look at the world on fire"
                  source={require("../../assets/world_image1.jpeg")}
                />
                <World
                  width={width}
                  photographer="Mookey Jones"
                  title="Imagination"
                  description="Collection 3"
                  source={require("../../assets/world_image2.jpeg")}
                />
                <World
                  width={width}
                  photographer="Forest Silva"
                  title="New York"
                  description="New York circa 1997"
                  source={require("../../assets/world_image3.jpeg")}
                />
                <World
                  width={width}
                  photographer="Unknow person"
                  title="Dawn"
                  description="South African dawn"
                  source={require("../../assets/world_image4.jpeg")}
                />
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
    height: this.animatedHeaderHeight,
    backgroundColor: "white",
    borderBottomWidth: 0.8,
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
    marginTop: Platform.OS == "android" ? 30 : null
  },
  input: {
    flex: 1,
    fontWeight: "700",
    backgroundColor: "white"
  },
  _animatedHeader: {
    flexDirection: "row",
    marginHorizontal: 20,
    position: "relative",
    top: this.animatedTagTop,
    opacity: this.animatedOpacity
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
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  }
});

export default Explore;
