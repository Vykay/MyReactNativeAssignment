import React, { Component } from 'react';
import { TextInput, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

export default class thirdB extends React.Component {
  render() {
    return (
        <ScrollView>
      <View style={styles.container}>

      <View style={{width: 500, height: 30, backgroundColor: 'purple'}} />

      <Text>{"\n"}</Text>
      <Text style = {styles.header}>Mobile App Ecommerce Store</Text>
      <Text>{"\n"}</Text>
      
      <View style={{width: 500, height: 20, backgroundColor: 'purple'}} />

      <Text style = {styles.cart}>{"\n"} Your Cart {"\n"}</Text>

      <Text style = {styles.product}>Product {"\n"}</Text>

      <View style={{width: 500, height: 3, backgroundColor: 'black'}} />

      <Text>{"\n"}</Text>

      <Image source={require('./book3.png')} style={{width: 200, height: 300}}/>
        <Text style = {styles.list}>{"\n"}Let's Make Some Great Art {"\n"} </Text>
        <Button
          title="REMOVE"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
        <View style={styles.alternativeLayoutButtonContainer}>
        
        </View>
        <Text>{"\n"}</Text>

        <View style={{width: 500, height: 3, backgroundColor: 'black'}} />

        <Text style = {styles.product}>{"\n"} Price </Text>

        <Text style = {styles.price}>RM 69.99</Text>
        
        <Text>{"\n"}</Text>
        <View style={{width: 500, height: 3, backgroundColor: 'black'}} />

        <Text style = {styles.product}>{"\n"} Quantity </Text>

        <Text style = {styles.price}> 1 </Text>

        <Text>{"\n"}</Text>
        <View style={{width: 500, height: 3, backgroundColor: 'black'}} />

        <Text style = {styles.product}>{"\n"} Total </Text>

        <Text style = {styles.price}> RM 69.99</Text>

        <Text>{"\n"}</Text>
        <View style={{width: 500, height: 3, backgroundColor: 'red'}} />   

        <Text style = {styles.notes}>{"\n"} Add Notes to Your Order </Text>

        <View style={{padding: 10}}/>
        <TextInput
          style={{height: 100, width: 320, borderColor: 'black', borderWidth: 1}}
          placeholder ="Type here to enter notes!"
        />

        <Text>{"\n"}</Text>
        <View style={{width: 500, height: 3, backgroundColor: 'red'}} />   

        <Text style = {styles.product}>{"\n"} Subtotal </Text>
        <Text style = {styles.total}> RM 69.99 </Text>
        <Text>{"\n"}</Text>

        <Text style = {styles.warn}> **Shipping & taxes calculated at checkout </Text>

        <View style={{width: 500, height: 3, backgroundColor: 'black'}} />  
        <Text>{"\n"}</Text>

        <Button
          title="Continue Shopping"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />

<Text>{"\n"}</Text>

         <Button
          title="Update"
          onPress={() =>
            alert('Updating the product !')
          }
        />

<Text>{"\n"}</Text>

         <Button
          title="CHECK OUT"
          onPress={() =>
            alert('You have purchased successfully !')
          }
        />

<Text>{"\n"}</Text>

<View style={{width: 500, height: 30, backgroundColor: 'purple'}} />

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    color: '#00008B',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    display: 'flex',
    marginRight: 50,
    marginLeft: 50,
  },

  cart: {
      color: 'green',
      fontSize: 25,
      justifyContent: 'center',
      fontWeight: 'bold',
  },

  product: {
     color: 'green',
     fontSize: 20,
     marginRight: 230,

  },

  warn: {
     color: 'purple',
     fontSize: 17,
  },

  notes: {
    color: 'green',
    fontSize: 20,
  },

  list: {
    color: 'blue',
    fontSize: 20,
    marginLeft: 50,
    marginRight: 50,
  },

  price: {
    fontSize: 20,
    justifyContent: 'center',
  },

  total: {
    fontSize: 20,
    justifyContent: 'center',
    color: 'blue',
  },

});