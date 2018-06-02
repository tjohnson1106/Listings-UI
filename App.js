import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Explore from "./src/screens/Explore";
import Saved from "./src/screens/Saved";
import History from "./src/screens/History";
import Inbox from "./src/screens/Inbox";
import Profile from "./src/screens/Profile";
import { FLAT_ORANGE, FLAT_BLUE } from "./src/utils/colors";

export default createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "Explore",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-search-outline"
            color={tintColor}
            size={24}
          />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "Saved",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-heart-outline"
            color={tintColor}
            size={24}
          />
        )
      }
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: "History",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/history_entry.jpeg")}
            style={{ height: 24, width: 24, tintColor: tintColor }}
          />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "Inbox",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-chatboxes-outline"
            color={tintColor}
            size={24}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="ios-person-outline"
            color={tintColor}
            size={24}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: FLAT_BLUE,
      //change inactive color
      inactiveTintColor: FLAT_ORANGE,
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
