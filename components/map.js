import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Text,
  View,
  Alert
} from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class Map extends Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }

  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      // Create the object to update this.state.mapRegion through the onRegionChange function
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }

  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      // If there are no new values set use the the current ones
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }

  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }

  onMapPress(e) {
    let region = {
      latitude:       e.nativeEvent.coordinate.latitude,
      longitude:      e.nativeEvent.coordinate.longitude,
      latitudeDelta:  0.00922*1.5,
      longitudeDelta: 0.00421*1.5
    }
    this.onRegionChange(region, region.latitude, region.longitude);
  }


  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          onRegionChange={this.onRegionChange.bind(this)}
          onPress={this.onMapPress.bind(this)}>


          <MapView.Marker
          coordinate={{
          latitude: 25.069844,
          longitude: 121.364318}}
          title={"title"}
          description={"description"}
          />
        </MapView>

       <View style={{marginTop:Dimensions.get('window').height/1.3}}>

       <View style={styles.bubble}>
       <Text>距離林口衛生所約:  {Math.round(Math.sqrt(((this.state.lastLat-25.069844)*(this.state.lastLat-25.069844)*110.574)+((this.state.lastLong-121.364318)*(this.state.lastLong-121.364318)*111.320))*10)} km</Text>
       </View>

       </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  radius:{
    height:50,
    width:50,
    borderRadius:50/2,
    overflow:'hidden',
    backgroundColor:'rgba(0,122,255,0.1)',
    borderWidth:1,
    borderColor:'rgba(0,122,255,0.3)',
    alignItems:'center',
    justifyContent:'center'
  },
  marker:{
    height:20,
    width:20,
    borderWidth:3,
    borderRadius:20/2,
    borderColor:'white',
    overflow:'hidden',
    backgroundColor:'#007AFF',
  },
  bubble: {
  alignItems:'center',
  justifyContent:'flex-end',
  backgroundColor: 'rgba(255,255,255,0.7)',
  paddingHorizontal: 18,
  paddingVertical: 12,
  borderRadius: 20
  }
});
