import React,{ Component }from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';

import {
	Navigator
} from 'react-native'
import {
	Router,
	Scene
} from 'react-native-router-flux';
import main from './components/main.js';
import login from './components/login.js';
import register from './components/register.js';
import information from './components/information.js';
import map from './components/map.js';
import setting from './components/setting.js';
import qrcode from './components/qrcode.js';
import cancer from './components/cancer.js';
import health from './components/health.js';
import doctor from './components/doctor.js';
import confirm from './components/confirm.js';
import check from './components/check.js';


export default class index extends Component {


	render() {
		return (
      <Router>
       <Scene key ='root'>
        <Scene
				panHandlers={null}
         key = "loginn"
         component={login}
         initial
         hideNavBar="true"
         />
        <Scene
			  	panHandlers={null}
         key = "mainn"
         component={main}
         hideNavBar="true"
         title = "健康資料"
         />
       <Scene
			   panHandlers={null}
         key = "registerr"
         component={register}
         hideNavBar="true"
         />
       <Scene
			  panHandlers={null}
         key = "informationn"
         component={information}
         hideNavBar="true"
         />
       <Scene
			  panHandlers={null}
         key = "mapp"
         component={map}
         hideNavBar="true"
         />
       <Scene
			 panHandlers={null}
          key = "settingg"
          component={setting}
          hideNavBar="true"
         />
       <Scene
			 panHandlers={null}
          key = "qrcodee"
          component={qrcode}
          hideNavBar="true"
         />
       <Scene
			 panHandlers={null}
          key = "cancerr"
          component={cancer}
          title = "癌篩報告"
         />
       <Scene
			 panHandlers={null}
          key = "healthh"
          component={health}
          title = "衛教資訊"
         />
       <Scene
			 panHandlers={null}
         key = "doctorr"
         component={doctor}
         title = "醫師建議"
         />
       <Scene
			 panHandlers={null}
         key = "confirmm"
         component={confirm}
         title = "各項通知"
         />
			 <Scene
			   panHandlers={null}
		     key = "checkk"
			   component={check}
			   title = "篩檢步驟"
		      />




  </Scene>
</Router>

		);
	}
}
