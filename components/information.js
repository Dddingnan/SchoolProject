import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Linking,
	TextInput,
	Dimensions,
	TouchableHighlight,
	Alert
} from 'react-native';
import {
	Actions
} from 'react-native-router-flux';
import {
	Header,
	Icon
} from 'react-native-elements';
import lop from './login.js'

export default class INFO extends Component {
	constructor(props){
	super(props)
}
aa() {
  Alert.alert("此為您最近五次癌篩報告紀錄")
	Actions.cancerr()
}

	render() {

		return (
      <View style = {styles.container} >

			<Header style = {styles.header}
			centerComponent = {
        <View style = {{width: Dimensions.get('window').width * 2}}>
				<Text style = {styles.text}>健康資料</Text>

				<TouchableOpacity onPress={() => Actions.checkk()} style={styles.howto}>
				<Text style = {styles.check}>如何做篩檢?</Text>
				</TouchableOpacity>

        </View >
			  }
				/>

			<View style = {styles.border}>
			</View>

			<View style = {styles.imagesr}>

			<TouchableHighlight style = {styles.margins}
			onPress = {() => Actions.confirmm()}>
			<Image style = {{width: Dimensions.get('window').width/2.1,height: Dimensions.get('window').height/3.82,borderRadius: 20}}
			source = {require('../images/h.png')}/>
      </TouchableHighlight>

      <TouchableHighlight onPress = {() => Actions.doctorr()}>
			<Image style = {{width: Dimensions.get('window').width/2.1,height: Dimensions.get('window').height/3.82,borderRadius: 20}}
			source = {require('../images/g.png')}/>
      </TouchableHighlight >

      </View>

      <View style = {styles.imagesr}>
			<TouchableHighlight style = {styles.margins}
			onPress = {() => Actions.healthh()}>
			<Image style = {{width: Dimensions.get('window').width/2.1,height: Dimensions.get('window').height/3.82,borderRadius: 20}}
			source = {require('../images/j.png')}/>
      </TouchableHighlight >

      <TouchableHighlight onPress={this.aa.bind(this)} >
			<Image style = {{width: Dimensions.get('window').width/2.1,height: Dimensions.get('window').height/3.82,borderRadius: 20}}
			source = {require('../images/f.png')}/>
      </TouchableHighlight >
      </View>

			<View style = {styles.logo}>
			<Image style = {{width: Dimensions.get('window').width/4,height: Dimensions.get('window').height/7,borderRadius: 20}}
			source = {require('../images/logo.png')}/>
      </View >

      <Text style = {styles.ad} >長庚大學 資管系</Text>
      </View >
		);
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
	},
	text: {
		fontSize: 30,
		fontWeight:"bold",
		backgroundColor:'rgba(255,255,255,0)',
		color: 'black',
	},
	check:{
   fontSize: 15,
	 color:'#fc0a0a',
	 marginLeft: Dimensions.get('window').width/1.51

	},
	header: {
		height: 80,
		marginBottom: 5
	},
	border: {
		borderWidth: 0.4,
		borderColor: 'black',
		marginBottom: 10
	},
	imagesr: {
		flexDirection: 'row',
		marginBottom: 10,
		marginLeft: 3,
	},
	margins: {
		marginRight: 10,
	},
	logo: {
		marginLeft: Dimensions.get('window').width/2.6,
	},
	ad: {
		fontSize: 15,
		marginLeft:  Dimensions.get('window').width/2.63,
		color: 'black',
	}

});
