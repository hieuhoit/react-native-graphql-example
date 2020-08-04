/*
 * Created by IntelliJ IDEA.
 * User: kavin
 * Date: Wed Jul 29 2020
 * Time: 18:05
 */

import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import HomeScreen from "../screens/Home/HomeScreen";
import CreatePost from "../screens/CreatePost/CreatePost";
import PostDetail from "../screens/PostDetail/PostDetail";

const RootStack = createStackNavigator();

const Navigator = () => {
  useEffect(() => {});

  return (
    <NavigationContainer>
      <RootStack.Navigator
        mode="modal"
        headerMode="none"
        initialRouteName="Loading">
        {/*<RootStack.Screen*/}
        {/*  name="Loading"*/}
        {/*  component={Loading}*/}
        {/*  options={{gestureEnabled: false}}*/}
        {/*/>*/}
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="CreatePost" component={CreatePost} />
        <RootStack.Screen name="PostDetail" component={PostDetail} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  mainContainer: {}
});

export default Navigator;
