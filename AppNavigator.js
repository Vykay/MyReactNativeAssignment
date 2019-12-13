import React, { Component } from 'react';
  import { createStackNavigator} from 'react-navigation-stack';
  import Home from './Home';
  import firstB from './firstB';
  import secondB from './secondB';
  import thirdB from './thirdB';
  import forthB from './forthB';
  import fifthB from './fifthB';
  import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';

  const AppNavigator = createStackNavigator({
    Home: { screen: Home, },
    firstB: { screen: firstB, },
    secondB: { screen: secondB, },
    thirdB: { screen: thirdB, },
    forthB: { screen: forthB, },
    fifthB: { screen: fifthB, },
  },
    {initialRouteName: 'Home',}
  );

  export default createAppContainer(AppNavigator);