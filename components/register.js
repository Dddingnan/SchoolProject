import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Alert,
  Dimensions,
  Keyboard
} from 'react-native';

import{ Actions } from 'react-native-router-flux';

export default class register extends Component {
      constructor(props){
      super(props)
      this.state={
        name:'',
        email: '',
        password: '',
        repassword: ''
      }
    }



   UserRegistrationFunction = () =>{
     Keyboard.dismiss()
     if (this.state.password == this.state.repassword && this.state.name != ""&& this.state.email != ""&& this.state.password != ""&& this.state.repassword != ""){
     const { name }  = this.state ;
     const { email }  = this.state ;
     const { password }  = this.state ;
     fetch('http://120.126.15.121:8088/react/User_Register.php', {
     method: 'POST',
     headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json',
     },
     body: JSON.stringify({
     user_name: name,
     email: email,
     password: password
     })
     }).then((response) => response.json())
     .then((responseJson) => {
    if (responseJson == '註冊成功'){
      Alert.alert(responseJson)
      Actions.loginn()
    }else {
      Alert.alert(responseJson)

    }
     }).catch((error) => {
     Alert.alert(error);
     });
     }
     else  {
       Alert.alert("輸入錯誤");
     }
     }

  render() {

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>

      <View >
       <Text style={styles.logo}>
       REGISTER
       </Text>

       <TextInput
       onChangeText={(text)=>this.setState({name:text})}
       value={this.state.name}
       placeholder="Name"
       placeholderTextColor='black'
       style={styles.input}
       returnKeyType="next"
       onSubmitEditing={()=>this.emailInput.focus()}
       keyboardType='default'
       autoCorrect={false}
       autoCapitalize='none'
       />

        <TextInput
        onChangeText={(text)=>this.setState({email:text})}
        value={this.state.email}
        placeholder="Email address"
        placeholderTextColor='black'
        style={styles.input}
        returnKeyType="next"
        onSubmitEditing={()=>this.passwordInput.focus()}
        ref={(input)=>this.emailInput = input}
        keyboardType='email-address'
        autoCorrect={false}
        autoCapitalize='none'
        />

        <TextInput
        onChangeText={(text)=>this.setState({password:text})}
        value={this.state.password}
        placeholder="Password"
        placeholderTextColor='black'
        style={styles.input}
        secureTextEntry={true}
        returnKeyType="next"
        ref={(input)=>this.passwordInput = input}
        onSubmitEditing={()=>this.repasswordInput.focus()}
        />

        <TextInput
        onChangeText={(text)=>this.setState({repassword:text})}
        value={this.state.repassword}
        placeholder="Re-Password"
        placeholderTextColor='black'
        style={styles.input}
        secureTextEntry={true}
        returnKeyType="go"
        ref={(input)=>this.repasswordInput = input}
        />

          <TouchableOpacity onPress={this.UserRegistrationFunction}   style={styles.Button }>
          <Text style={styles.Buttontext}>CREATE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => Actions.loginn()} style={styles.Button }>
          <Text style={styles.Buttontext}>Back</Text>
          </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  input:{
   height:45,
   backgroundColor:'rgba(255,255,255,0.4)',
   marginBottom:20,
   color:'black',
   paddingHorizontal:50,
   fontWeight:'300',
   fontSize:15,
  },
  Button:{
   backgroundColor:'rgba(255,255,255,0.4)',
   paddingVertical:10,
   borderRadius:50,
   marginBottom:10
  },
  Buttons:{
   backgroundColor:'rgba(255,255,255,10)',
   paddingVertical:10
  },
  Buttontext:{
    textAlign:'center',
    color:'black',
    fontWeight:'900'
  },
  logo:{
    color:'black',
    fontSize:45,
    fontWeight:"bold",
    backgroundColor:'rgba(255,255,255,0)',
    marginBottom:Dimensions.get('window').height/8,
  }
});
