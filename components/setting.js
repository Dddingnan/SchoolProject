import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Dimensions,
  Alert,
  Linking
} from 'react-native';
import lop from './login.js'
import{Actions} from 'react-native-router-flux';
import {
	Header,
	Icon
} from 'react-native-elements';

export default class SETTING extends Component {
  constructor(props){
  super(props)

  }

  aa() {
  Linking.openURL('http://www.tnepb.gov.tw/AIR_PM25.htm').catch(err => console.error('An error occurred', err));
  }

  render() {

    return (
      <View style={styles.container}>
      <View style={{marginBottom: 8}}>
      </View>


      <TouchableOpacity
      onPress={() => Actions.loginn()}
      style = {{alignItems: 'flex-end',paddingTop: Dimensions.get('window').height*0.01}}
      >
      <Text style={{color:'#3681e3',fontSize:15}}>登出</Text>
      </TouchableOpacity>

       <View style = {{justifyContent: 'center',alignItems: 'center',marginBottom: Dimensions.get('window').height*0.01}}>
       <Text style = {{fontSize: 23,color:'black'}}>
       {global.constants.area}
       </Text>
       </View>

       <View style = {{justifyContent: 'center',alignItems: 'center',marginBottom: Dimensions.get('window').height*0.01}}>
       <Text style = {{fontSize: 15,color:'black'}}>
       {global.constants.weather}
       </Text>
       </View>

       <View style = {{justifyContent: 'center',alignItems: 'center',marginBottom:  Dimensions.get('window').height*0.04}}>
       <Text style = {{fontSize: 50,color:'black'}}>
       {global.constants.phytemp}
       </Text>
       </View>

       <View style = {styles.content}>

       <Text style = {{fontSize: 15,color:'black'}}>
       體感溫度:{global.constants.actphy}
       </Text>

      </View>


       <View style = {{borderWidth: 0.4,borderColor: 'black',marginBottom: Dimensions.get('window').height*0.01,marginTop:Dimensions.get('window').height*0.01}}>
       </View>

       <View style = {styles.content}>
       <Text style = {{color:'black'}}>
       個人資料
       </Text>
       </View>

       <View style = {{marginBottom: Dimensions.get('window').height*0.01}}>
       </View>


        <View style = {styles.content}>
        <View style = {{flexDirection: 'row'}}>
        <Text style = {{fontSize: 19,color:'black'}}>
        Email: </Text>
        <Text style = {{fontSize: 20,color:'black'}}>
        {global.constants.email}
        </Text>
        </View>
        </View>


        <View style = {styles.content}>
        <View style = {{flexDirection: 'row'}}>
        <Text style = {{fontSize: 19,color:'black'}}>
        名稱: </Text>
        <Text style = {{fontSize: 20,color:'black'}}>
        {global.constants.username}
        </Text>
        </View>
        </View>


        <View style = {{borderWidth: 0.4,borderColor: 'black',marginBottom: Dimensions.get('window').height*0.01,marginTop:Dimensions.get('window').height*0.01}}>
        </View>

        <View style = {styles.content}>
        <Text style = {{color:'black'}}>
        降雨機率
        </Text>
        </View>

        <View style = {{marginBottom: Dimensions.get('window').height*0.01}}>
        </View>

        <View style = {styles.content}>
        <Text style = {{fontSize: 25,color:'black'}}>
        {global.constants.rainy}
        </Text>
        </View>


        <View style = {{borderWidth: 0.4,borderColor: 'black',marginBottom: Dimensions.get('window').height*0.01,marginTop:Dimensions.get('window').height*0.01}}>
        </View>

        <View style = {styles.content}>
        <Text style = {{color:'black'}}>
        相對濕度
        </Text>
        </View>

        <View style = {{marginBottom: Dimensions.get('window').height*0.01}}>
        </View>

        <View style = {styles.content}>
        <Text style = {{fontSize: 25,color:'black'}}>
        {global.constants.humid}
        </Text>
        </View>

        <View style = {{borderWidth: 0.4,borderColor: 'black',marginBottom: 10,marginTop:5}}>
        </View>

        <View style = {styles.content}>
        <Text style = {{color:'black'}}>
        PM 2.5值/程度</Text>
        </View>

        <View style = {{marginBottom: Dimensions.get('window').height*0.01}}>
        </View>


        <View style={{flexDirection: 'row'}}>
        <View style = {styles.content}>

        <Text style = {{fontSize: 25,color:'black'}}>
        {global.constants.pmvalue}/{global.constants.pmlevel}</Text>
        </View>

        <TouchableOpacity
        onPress={this.aa.bind(this)}
        style = {{alignItems: 'flex-end',justifyContent: 'flex-end',marginLeft: Dimensions.get('window').height*0.01}}>
        <Text style = {{fontSize: 15,color: '#fc0a0a'}}>PM2.5 指標對照表</Text>
        </TouchableOpacity>

        </View>



        <View style = {{borderWidth: 0.4,borderColor: 'black',marginBottom: Dimensions.get('window').height*0.01,marginTop:Dimensions.get('window').height*0.01}}>
        </View>

        <View style = {styles.content}>
        <Text style = {{color:'black'}}>
        氣象抓取時間
        </Text>
        </View>

        <View style = {{marginBottom: Dimensions.get('window').height*0.01}}>
        </View>


        <View style = {styles.content}>
        <Text style = {{fontSize: 20,color:'black'}}>
        {global.constants.weatherdate}
        </Text>
        </View>


        <View style = {{borderWidth: 0.4,borderColor: 'black',marginBottom: Dimensions.get('window').height*0.01,marginTop:Dimensions.get('window').height*0.01}}>
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
		flex: 1,
		backgroundColor: 'white',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
	},
  text:{
    fontSize:30 ,
    fontWeight:"bold",
    backgroundColor:'rgba(255,255,255,0)'
  },
    Button:{
    backgroundColor:'rgba(255,255,255,0)',
    paddingVertical:10,
  },
  Buttontext:{
    color:'#0F0F0F',
    fontSize:20 ,
  },
  signoutt:{
   marginLeft: 320,
 },
 border: {
   borderWidth: 0.4,
   borderColor: 'black',
   marginBottom: Dimensions.get('window').height*0.1,
   marginTop:Dimensions.get('window').height*0.1
 },
  content:{
    alignItems: 'flex-start',
    marginLeft: Dimensions.get('window').height*0.01
  }
});
