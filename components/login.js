import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert,
  Dimensions,
  Keyboard
} from 'react-native';


import{ Actions } from 'react-native-router-flux';

export default class TEST extends Component {

    constructor(props){
      super(props)
      this.state={
        email:'',
        password:''
      }
    }

  UserLoginFunction = () =>{
    Keyboard.dismiss()

    if ( this.state.email != ""&& this.state.password != ""){
    const { email }  = this.state ;
    const { password }  = this.state ;
    fetch('http://120.126.15.121:8088/react/User_Login.php', {
    method: 'POST',
    headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
    body: JSON.stringify({
    email: email,
    password: password
    })

    }).then((response) => response.json())
    .then((responseJson) => {


   var splitword = responseJson.split('/_')

    global.constants = {

     email:splitword[0],
     password:splitword[1],
     username:splitword[2],

     unit:splitword[3],
     number:splitword[4],
     sicknumber:splitword[5],
     gender:splitword[6],
     borndate:splitword[7],
     id:splitword[8],
     testdate:splitword[9],
     getdate:splitword[10],
     reportdate:splitword[11],
     item:splitword[12],
     result:splitword[13],
     range:splitword[14],

     unit_2:splitword[15],
     number_2:splitword[16],
     sicknumber_2:splitword[17],
     gender_2:splitword[18],
     borndate_2:splitword[19],
     id_2:splitword[20],
     testdate_2:splitword[21],
     getdate_2:splitword[22],
     reportdate_2:splitword[23],
     item_2:splitword[24],
     result_2:splitword[25],
     range_2:splitword[26],

     unit_3:splitword[27],
     number_3:splitword[28],
     sicknumber_3:splitword[29],
     gender_3:splitword[30],
     borndate_3:splitword[31],
     id_3:splitword[32],
     testdate_3:splitword[33],
     getdate_3:splitword[34],
     reportdate_3:splitword[35],
     item_3:splitword[36],
     result_3:splitword[37],
     range_3:splitword[38],

     unit_4:splitword[39],
     number_4:splitword[40],
     sicknumber_4:splitword[41],
     gender_4:splitword[42],
     borndate_4:splitword[43],
     id_4:splitword[44],
     testdate_4:splitword[45],
     getdate_4:splitword[46],
     reportdate_4:splitword[47],
     item_4:splitword[48],
     result_4:splitword[49],
     range_4:splitword[50],

     unit_5:splitword[51],
     number_5:splitword[52],
     sicknumber_5:splitword[53],
     gender_5:splitword[54],
     borndate_5:splitword[55],
     id_5:splitword[56],
     testdate_5:splitword[57],
     getdate_5:splitword[58],
     reportdate_5:splitword[59],
     item_5:splitword[60],
     result_5:splitword[61],
     range_5:splitword[62],



     area:splitword[63],
     weatherdate:splitword[64],
     weather:splitword[65],
     phytemp:splitword[66],
     actphy:splitword[67],
     rainy:splitword[68],
     humid:splitword[69],
     pmvalue:splitword[70],
     pmlevel:splitword[71],

     title:splitword[72],
     url:splitword[73],
     urldate:splitword[74],

     title_2:splitword[75],
     url_2:splitword[76],
     urldate_2:splitword[77],

     title_3:splitword[78],
     url_3:splitword[79],
     urldate_3:splitword[80],

     title_4:splitword[81],
     url_4:splitword[82],
     urldate_4:splitword[83],

     title_5:splitword[84],
     url_5:splitword[85],
     urldate_5:splitword[86],

     title_6:splitword[87],
     url_6:splitword[88],
     urldate_6:splitword[89],

     title_7:splitword[90],
     url_7:splitword[91],
     urldate_7:splitword[92],

     title_8:splitword[93],
     url_8:splitword[94],
     urldate_8:splitword[95],

     note:splitword[96],
     nextcheck:splitword[97],

     note2:splitword[98],
     note3:splitword[99]
     };


if (global.constants.email == "NO"){
  Alert.alert("輸入錯誤")
}else{
  Alert.alert(
  '歡迎',
  splitword[2]+'你好',
  [{text: 'OK', onPress: () => console.log('OK Pressed')},
  ],{ cancelable: false }
  )
  Actions.mainn()
}
    }).catch((error) => {
    Alert.alert(error);
    });

   }
   else  {
   Alert.alert("輸入錯誤")
   }


   
   }



  render() {
    return (
       <View style={styles.container}>


       <Image style={styles.background} source={require('../images/cc.jpg')} />
       <View>

      <StatusBar
      barStyle="light-content"
      />
       <Text style={styles.logo}>
       Vending Machine
       </Text>

        <TextInput
        onChangeText={(text)=>this.setState({email:text})}
        value={this.state.email}
        placeholder="Email address"
        placeholderTextColor='rgba(255,255,255,10)'
        style={styles.input}
        returnKeyType="next"
        onSubmitEditing={()=>this.passwordInput.focus()}
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        />

        <TextInput
        onChangeText={(text)=>this.setState({password:text})}
        value={this.state.password}
        placeholder="Password"
        placeholderTextColor='rgba(255,255,255,80)'
        style={styles.input}
        secureTextEntry={true}
        returnKeyType="go"
        ref={(input)=>this.passwordInput = input}
        />

         <TouchableOpacity onPress={this.UserLoginFunction} style={styles.Button }>
          <Text style={styles.Buttontext}>Login</Text>
           </TouchableOpacity>

         <TouchableOpacity onPress={() => Actions.registerr()} style={styles.Buttons }>
          <Text style={styles.newaccount}>create new account?</Text>
         </TouchableOpacity>


      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    background: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    position: 'absolute'
  },
  input:{
   height:48,
   backgroundColor:'rgba(255,255,255,0.4)',
   marginBottom:20,
   color:'#FFF',
   paddingHorizontal:30,
   fontWeight:'400',
   fontSize:20,
   borderRadius:20
  },
  Button:{
   backgroundColor:'rgba(255,255,255,0.4)',
   paddingVertical:10,
   borderRadius:80,
  },
  Buttons:{
   backgroundColor:'rgba(255,255,255,0)',
   paddingVertical:10,

  },
  Buttontext:{
    textAlign:'center',
    color:'#FFFFFF',
    fontWeight:'900'
  },
  logo:{
    color:'#FFFFFF',
    fontSize:30,
    fontStyle:'italic',
    fontWeight:"bold",
    textShadowColor:'#252525',
    backgroundColor:'rgba(255,255,255,0)',
    textShadowOffset:{width:2,height:2},
    textShadowRadius:15,
    marginBottom:20,
  },
    newaccount:{
    color:'#FFFFFF',
    fontSize:18,
    fontStyle:'normal',
    textShadowColor:'#252525',
    backgroundColor:'rgba(255,255,255,0)',
    marginTop:10,
  },
});
