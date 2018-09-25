import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

import{Actions} from 'react-native-router-flux';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import lop from './login.js'


export default class CANCER extends Component {
  render() {

    return (

      <ScrollableTabView
      initialPage={0}
      renderTabBar={() => <ScrollableTabBar/>}
      tabBarBackgroundColor='white'
      tabBarTextStyle={{fontSize: 18}}>

      <ScrollView tabLabel='最近一次'
      style={styles.tabView}>

      <View style={styles.card}>

      <Text style={styles.title}>
      ID:
      </Text>

      <View style = {{borderWidth: 1,borderColor: 'black'}}>



      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      性別:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.gender}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      身分證字號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.id}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      病歷編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.sicknumber}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{marginBottom:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      出生年月日:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.borndate}
      </Text>
      </View>
      </View>

      </View>

      <Text style={styles.title}>
      Report:
      </Text>


      <View style = {{borderWidth: 1,borderColor: 'black'}}>


      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      健檢項目:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.item}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      採檢時間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.testdate}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.number}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢體單位:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.unit}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      收件日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.getdate}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      報告日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.reportdate}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      參考區間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.range}
      </Text>
      <Text style={{fontSize:15,color: '#E46852',}}>
      {"正常: <100 ng/ml"}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{marginBottom: 5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗結果:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.result}>
      {global.constants.result}
      </Text>
      </View>
      </View>

      </View>
      </View>


      </ScrollView>



      <ScrollView tabLabel='上一次' style={styles.tabView}>

      <View style={styles.card}>

      <Text style={styles.title}>
      ID:
      </Text>

      <View style = {{borderWidth: 1,borderColor: 'black'}}>



      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      性別:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.gender_2}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      身分證字號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.id_2}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      病歷編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.sicknumber_2}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{marginBottom:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      出生年月日:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.borndate_2}
      </Text>
      </View>
      </View>

      </View>

      <Text style={styles.title}>
      Report:
      </Text>


      <View style = {{borderWidth: 1,borderColor: 'black'}}>


      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      健檢項目:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.item_2}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      採檢時間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.testdate_2}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.number_2}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢體單位:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.unit_2}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      收件日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.getdate_2}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      報告日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.reportdate_2}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      參考區間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.range_2}
      </Text>
      <Text style={{fontSize:15,color: '#E46852',}}>
      {"正常: <100 ng/ml"}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{marginBottom: 5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗結果:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.result}>
      {global.constants.result_2}
      </Text>
      </View>
      </View>

      </View>
      </View>

      </ScrollView>

      <ScrollView tabLabel='上兩次' style={styles.tabView}>

      <View style={styles.card}>

      <Text style={styles.title}>
      ID:
      </Text>

      <View style = {{borderWidth: 1,borderColor: 'black'}}>



      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      性別:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.gender_3}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      身分證字號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.id_3}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      病歷編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.sicknumber_3}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{marginBottom:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      出生年月日:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.borndate_3}
      </Text>
      </View>
      </View>

      </View>

      <Text style={styles.title}>
      Report:
      </Text>


      <View style = {{borderWidth: 1,borderColor: 'black'}}>


      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      健檢項目:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.item_3}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      採檢時間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.testdate_3}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.number_3}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢體單位:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.unit_3}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      收件日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.getdate_3}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      報告日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.reportdate_3}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      參考區間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.range_3}
      </Text>
      <Text style={{fontSize:15,color: '#E46852',}}>
      {"正常: <100 ng/ml"}
      </Text>

      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{marginBottom: 5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗結果:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.result}>
      {global.constants.result_3}
      </Text>
      </View>
      </View>

      </View>
      </View>

      </ScrollView>

      <ScrollView tabLabel='上三次' style={styles.tabView}>

      <View style={styles.card}>

      <Text style={styles.title}>
      ID:
      </Text>

      <View style = {{borderWidth: 1,borderColor: 'black'}}>



      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      性別:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.gender_4}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      身分證字號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.id_4}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      病歷編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.sicknumber_4}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{marginBottom:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      出生年月日:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.borndate_4}
      </Text>
      </View>
      </View>

      </View>

      <Text style={styles.title}>
      Report:
      </Text>


      <View style = {{borderWidth: 1,borderColor: 'black'}}>


      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      健檢項目:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.item_4}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      採檢時間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.testdate_4}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.number_4}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢體單位:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.unit_4}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      收件日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.getdate_4}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      報告日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.reportdate_4}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      參考區間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.range_4}
      </Text>
      <Text style={{fontSize:15,color: '#E46852',}}>
      {"正常: <100 ng/ml"}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{marginBottom: 5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗結果:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.result}>
      {global.constants.result_4}
      </Text>
      </View>
      </View>

      </View>
      </View>

      </ScrollView>

      <ScrollView tabLabel='上四次' style={styles.tabView}>

      <View style={styles.card}>

      <Text style={styles.title}>
      ID:
      </Text>

      <View style = {{borderWidth: 1,borderColor: 'black'}}>



      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      性別:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.gender_5}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      身分證字號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.id_5}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      病歷編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.sicknumber_5}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>


      <View style={{marginBottom:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      出生年月日:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.borndate_5}
      </Text>
      </View>
      </View>

      </View>

      <Text style={styles.title}>
      Report:
      </Text>


      <View style = {{borderWidth: 1,borderColor: 'black'}}>


      <View style={{marginTop:5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      健檢項目:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.item_5}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      採檢時間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.testdate_5}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗編號:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.number_5}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢體單位:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.unit_5}
      </Text>
      </View>
      </View>


      <View style = {styles.border}>
      </View>

      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      收件日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.getdate_5}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      報告日期:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.reportdate_5}
      </Text>
      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      參考區間:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.content}>
      {global.constants.range_5}
      </Text>
      <Text style={{fontSize:15,color: '#E46852',}}>
      {"正常: <100 ng/ml"}
      </Text>

      </View>
      </View>

      <View style = {styles.border}>
      </View>



      <View style={{marginBottom: 5,flexDirection: 'row'}}>
      <Text style={styles.Textt}>
      檢驗結果:
      </Text>
      <View style={{marginLeft:5}}>
      <Text style={styles.result}>
      {global.constants.result_5}
      </Text>
      </View>
      </View>

      </View>
      </View>

      </ScrollView>




    </ScrollableTabView>


    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
  borderWidth: 1,
  backgroundColor: 'white',
  borderColor: 'rgba(0,0,0,0.1)',
  padding:3,
  },
  Textt:{
    fontSize:20,
    color: 'black',
  },
  title:{
    fontSize:25,
    color: 'black',
    marginBottom: 5,
    marginLeft: 5,
    marginTop: 5,
  },
  border:{
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 5,
    marginTop: 5,
  },
  content:{
    fontSize:20,
    color: 'steelblue',
  },
  result:{
    fontSize:20,
    color: '#fc0a0a',
  }
});
