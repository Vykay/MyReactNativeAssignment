import React, { Component } from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class Home extends React.Component {
  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
      <View style={{width: 500, height: 30, backgroundColor: 'purple'}} />
  
      <Text>{"\n"}</Text>
      <Text style = {styles.header}>Mobile App Ecommerce Store</Text>
      <Text>{"\n"}</Text>

      <View style={{width: 500, height: 20, backgroundColor: 'purple'}} />

      <Text style = {styles.topic}> {"\n"}Handpicked Children's Books for Your Family.{"\n"}</Text>

      <Image source={require('./book1.png')} style={{width: 200, height: 300}}/>
        <Text style = {styles.list}>{"\n"}TERRIFIC TIMELINES: CARS {"\n"} </Text>
        <Text style = {styles.price}>RM 70.49</Text>

        <View style={styles.alternativeLayoutButtonContainer}>
         <Button
          title="Add To Cart"
          onPress={() =>
            this.props.navigation.navigate('firstB')
          }
          color = 'green'
        />
        </View>

        <Text>{"\n"}</Text>
        
        <Image source={require('./book2.png')} style={{width: 200, height: 300}}/>
        <Text style = {styles.list}>{"\n"}The Amazing Animal Adventure {"\n"} </Text>
        <Text style = {styles.price}>RM 80.99</Text>
        <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          title="Add To Cart"
          onPress={() =>
            this.props.navigation.navigate('secondB')
          }
          color = 'green'
        />
        </View>
        <Text>{"\n"}</Text>

        <Image source={require('./book3.png')} style={{width: 200, height: 300}}/>
        <Text style = {styles.list}>{"\n"}Let's Make Some Great Art {"\n"} </Text>
        <Text style = {styles.price}>RM 69.99</Text>
        <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          title="Add To Cart"
          onPress={() =>
            this.props.navigation.navigate('thirdB')
          }
          color = 'green'
        />
        </View>
        <Text>{"\n"}</Text>

        <Image source={require('./book4.png')} style={{width: 200, height: 300}}/>
        <Text style = {styles.list}>{"\n"}Midnight Monsters: A Pop-up Shadow Search {"\n"} </Text>
        <Text style = {styles.price}>RM 99.99</Text>
        <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          title="Add To Cart"
          onPress={() =>
            this.props.navigation.navigate('forthB')
          }
          color = 'green'
        />
        </View>
        <Text>{"\n"}</Text>

        <Image source={require('./book5.png')} style={{width: 200, height: 300}}/>
        <Text style = {styles.list}>{"\n"}To the Ends of the Earth and Back Again: The Longest Coloring Book in the World {"\n"} </Text>
        <Text style = {styles.price}>RM 56.49</Text>
        <View style={styles.alternativeLayoutButtonContainer}>
        <Button
          title="Add To Cart"
          onPress={() =>
            this.props.navigation.navigate('fifthB')
          }
          color = 'green'
        />
        </View>
        <Text>{"\n"}</Text>

        <View style={{width: 500, height: 30, backgroundColor: 'purple'}} />
        
        </View>
      </ScrollView>
    );
  }
  }

    class Greeting extends Component {
        render() {
          return (
            <View style={{alignItems: 'center'}}>
              <Text>Hello {this.props.omg}!</Text>
            </View>
          );
        }
      }
      
      class Blink extends Component {
      
        componentDidMount(){
          // Toggle the state every second
          setInterval(() => (
            this.setState(previousState => (
              { isShowingText: !previousState.isShowingText }
            ))
          ), 1000);
        }
      
        //state object
        state = { isShowingText: true };
      
        render() {
          if (!this.state.isShowingText) {
            return null;
          }
      
          return (
            <Text>{this.props.text}</Text>
          );
        }
      }
      
      const styles = StyleSheet.create({

        container: {
            flex: 1,
            backgroundColor: 'pink',
            alignItems: 'center',
            justifyContent: 'center',
          },
      
       header: {
          color: 'darkblue',
          fontSize: 30,
          fontWeight: 'bold',
          justifyContent: 'center',
          display: 'flex',
          marginRight: 50,
          marginLeft: 50,
        },
      
        topic: {
          color: 'red',
          fontWeight: 'bold',
          fontSize: 20,
          marginLeft: 50,
          marginRight: 50,
        },
      
        list: {
          color: 'blue',
          fontSize: 15,
          marginLeft: 50,
          marginRight: 50,
        },
      
        price: {
          fontSize: 20,
        }
      
        /*
        bigBlue: {
          color: 'blue',
          fontWeight: 'bold',
          fontSize: 30,
        },
      
        red: {
          color: 'red',
        },
      
       
      
        container: {
          flex: 1,
          justifyContent: 'center',
         },
      
         buttonContainer: {
           margin: 20
         },
      
         alternativeLayoutButtonContainer: {
           margin: 20,
           flexDirection: 'row',
           justifyContent: 'space-between'
         }
        */
      
      });