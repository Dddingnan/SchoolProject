import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Linking,
  ScrollView,
  Dimensions
} from 'react-native';

import{Actions} from 'react-native-router-flux';
import lop from './login.js'

export default class CONFIRM extends Component {

  aa() {
  Linking.openURL(global.constants.url).catch(err => console.error('An error occurred', err));
  }

  bb() {
  Linking.openURL(global.constants.url_2).catch(err => console.error('An error occurred', err));
  }

  cc() {
  Linking.openURL(global.constants.url_3).catch(err => console.error('An error occurred', err));
  }

  dd() {
  Linking.openURL(global.constants.url_4).catch(err => console.error('An error occurred', err));
  }

  ee() {
  Linking.openURL(global.constants.url_5).catch(err => console.error('An error occurred', err));
  }

  ff() {
  Linking.openURL(global.constants.url_6).catch(err => console.error('An error occurred', err));
  }

  gg() {
  Linking.openURL(global.constants.url_7).catch(err => console.error('An error occurred', err));
  }

  hh() {
  Linking.openURL(global.constants.url_8).catch(err => console.error('An error occurred', err));
  }

  render() {



    return (
      <ScrollView>
      <View style={styles.container}>


      <View style = {{paddingTop: 10}}>
      <Text style={styles.title}>建議再次檢測時間:</Text>
      </View>

      <View style = {styles.border}>
      </View>

      <Text style={styles.checktime}>{global.constants.nextcheck}</Text>


      <View style = {styles.border}>
      </View>

      <View style = {{paddingTop: 2}}>
      <Text style={styles.title}>Information</Text>
      <Text style = {{fontSize: 18, color:'#BB562E',marginLeft:5}}>您的訊息:</Text>
      </View>

      <View style = {styles.border}>
      </View>

      <View style = {{marginBottom:20}}>
      <Text style={styles.url}>* {global.constants.note}</Text>
      </View>

      <View style = {{marginBottom:8}}>
      <Text style={styles.url}>* {global.constants.note1}</Text>
      </View>

      <View style = {styles.border}>
      </View>

      <View style = {{paddingTop: 2}}>
      <Text style={styles.title}>News</Text>
      <Text style = {{fontSize: 18, color:'#BB562E',marginLeft:5}}>林口衛生所活動訊息:</Text>
      </View>

      <View style = {styles.border}>
      </View>


      <View >
      <TouchableOpacity onPress={this.aa.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.bb.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_2} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_2}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.cc.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_3} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_3}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.dd.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_4} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_4}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.ee.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_5} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_5}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.ff.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_6} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_6}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.gg.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_7} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_7}</Text>
      </TouchableOpacity>
      </View>

      <View >
      <TouchableOpacity onPress={this.hh.bind(this)} style={styles.act}>
      <Text style={styles.url}>* {global.constants.title_8} </Text>
      <Text style={styles.date}>日期: {global.constants.urldate_8}</Text>
      </TouchableOpacity>
      </View>

      <View style = {styles.border}>
      </View>




      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  border: {
    borderWidth: 0.4,
    borderColor: 'black',
    marginBottom: 10,
    marginTop:5
  },
  act: {
    marginBottom: 20,
  },
  title:{
    color:'black',
    marginLeft:5
  },
  checktime:{
    color:'black',
    fontSize: 20,
    marginLeft:5
  },
  url:{
    color:'black',
    marginLeft:5
  },
  date:{
    color:'#CC8B65',
    marginLeft:5
  }


});
