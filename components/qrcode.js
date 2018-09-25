import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Alert
} from 'react-native';
import{Actions} from 'react-native-router-flux';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Header,Icon } from 'react-native-elements';
import lop from './login.js'

export default class TEST extends Component {

  onSuccess(e) {
      fetch(e.data, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      email: global.constants.email,
      password: global.constants.password
      })

      }).then((response) => response.json())
      .then((responseJson) => {

        if (responseJson == "YES"){
        Alert.alert(global.constants.username+'請從販賣機拿取癌篩包')
      }else{
        Alert.alert('請掃描販賣機上QR CODE')
      }
      }).catch((error) => {
      Alert.alert(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>

       <View style = {styles.title}>

       <Header
         centerComponent={{ text: 'QR CODE', style: { color: 'black', fontWeight:"bold" } }}
       />

       <Text style= {{ color: 'black', fontWeight:"bold" }}> 請掃描販賣機右上角QR Code </Text>

       </View>

      <View style = {styles.boxtwo}>
        <QRCodeScanner
        onRead={this.onSuccess.bind(this)}
        />
       </View>

       <View style = {[styles.boxcContainer , styles.boxthree]}>
       </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    position:'absolute',
  },
  title:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: Dimensions.get('window').height/4.5,
    width: Dimensions.get('window').width,
  },
   boxtwo:{
     backgroundColor: 'black',
     width: Dimensions.get('window').width,
   },
   boxthree:{
     backgroundColor: 'white',
     height:180,
   },

});
