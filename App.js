import  React from "react";

import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import FbPage from "./screens/fb"
import InstaPage from "./screens/insta"
// import SearchScreen from "./screens/SearchScreen";

export default class App extends React.Component{
  render(){
  return <AppContainer/>
 ;}
}
const TabNavigator = createBottomTabNavigator({
   FACEBOOK: { screen: FbPage },
   INSTAGRAM: { screen: InstaPage }
});

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center"
  }
});


