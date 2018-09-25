import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  ListView,
} from 'react-native';

import{Actions} from 'react-native-router-flux';

export default class CHECK extends Component {


  render() {

    return (
      <ScrollView>
      <View style={styles.container}>


       <Image style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height/2.45}}
       source = {require('../images/1.png')}/>
       <Image style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height/2}}
       source = {require('../images/2.png')}/>
       <Image style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height/1.7}}
       source = {require('../images/3.png')}/>
       <Image style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height/1.6}}
       source = {require('../images/4.png')}/>
       <Image style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height/1.8}}
       source = {require('../images/5.png')}/>
       <Image style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height/1.7}}
       source = {require('../images/6.png')}/>

      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
});
