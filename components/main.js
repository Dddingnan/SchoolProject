import React,{ Component }from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { Container, Content, Footer, FooterTab, Icon, Badge, Button  } from 'native-base';
import{Actions} from 'react-native-router-flux';
import info from './information.js'
import map from './map.js'
import set from './setting.js'
import qrcode from './qrcode.js'

export default class Main extends Component {

    constructor(props){
    super(props)
    this.state = {index: 0}
  }
  switchScreen(index) {
     this.setState({index: index})
  }

  render() {
    let AppComponent = null;

     if (this.state.index == 0) {
        AppComponent = info

     } else if (this.state.index == 1){
        AppComponent = qrcode
     } else if (this.state.index == 2){
        AppComponent = map
     }else {
        AppComponent = set
     }

    return (
      <Container>
      <Content scrollEnabled={false}>

      <View style = {{width: Dimensions.get('window').width,height: Dimensions.get('window').height}}>
      <AppComponent/>
      </View>

      </Content>
          <Footer>
            <FooterTab>
                  <Button  active={this.state.index==0} onPress={() => this.switchScreen(0) } >
                  <Text>
                  健康資料
                  </Text>
                  <Icon name='md-list-box' />
                  </Button>
                  <Button active={this.state.index==1} onPress={() => this.switchScreen(1) }>
                  <Text>
                  QR Code
                  </Text>
                  <Icon name='md-qr-scanner' />
                  </Button>

                  <Button active={this.state.index==2} onPress={() => this.switchScreen(2) }>
                  <Text>
                  導覽
                  </Text>
                <Icon name='md-navigate' />
                  </Button>

                  <Button active={this.state.index==3} onPress={() => this.switchScreen(3) }>
                  <Text>
                  設定
                  </Text>
                  <Icon name='md-body' />
                  </Button>

              </FooterTab>
          </Footer>
      </Container>
    );
  }
}
