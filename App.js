import React, { Component } from 'react';
import { createStackNavigator} from 'react-navigation';
import {createAppContainer} from 'react-navigation';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import AppNavigator from './AppNavigator';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}
