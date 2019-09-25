import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import screenA from "./screen/Welcome";
import screenB from "./screen/DrawerScreenB";
import Login from "./screen/Login";
import HomeScreen from "./screen/HomeStack/HomeScreen"
import DetailScreen from "./screen/HomeStack/Details"
import { createAppContainer } from 'react-navigation';
import Icon from "@expo/vector-icons/Ionicons";
import { createStackNavigator } from 'react-navigation-stack';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        header: null
      }
    }
  },
  Details: {
    screen: DetailScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Details"
      }
    }

  }
})



const BottomNavigation = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" color={tintColor} size={25} />
        )
      }
    },
    Reorder: {
      screen: screenB,
      navigationOptions: {
        tabBarLabel: 'Reorder',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-albums" color={tintColor} size={25} />
        )
      }
    },
    Services: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Services',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-construct" color={tintColor} size={25} />
        )
      }
    },
    Cart: {
      screen: screenB,
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cart" color={tintColor} size={25} />
        )
      }
    },
    Account: {
      screen: screenB,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" color={tintColor} size={25} />
        )
      }
    }

  },
  {
    initialRouteName: 'Home',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: '#694fad' },
  }
);

const AppContainer = createAppContainer(BottomNavigation);


export default function App() {
  return (
    <AppContainer />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
