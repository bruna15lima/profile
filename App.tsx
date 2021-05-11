import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView  from 'react-native-maps'
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import mapMarker from './assets/marker.png'

export default function App() {
  return (
    <View style={styles.container}>      
      <MapView 
      provider={PROVIDER_GOOGLE}
      style={styles.map} 
      initialRegion={{
        latitude:-9.616731,
        longitude:-35.7079124,
        latitudeDelta: 0.008,
        longitudeDelta: 0.008,      
      }}>
        <Marker
          icon={mapMarker}
          calloutAnchor={{
            x: 2.7,
            y: 0.8,
          }}
          coordinate={{
            latitude:-9.616731,
            longitude:-35.7079124,
          }}
        >
          <Callout tooltip onPress={() =>{alert('oi') }} >
            <View style={styles.calloutContainer}>
            <Text style={styles.calloutText}>nome do usuario</Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  calloutContainer: {
     width: 160,
     height: 46,
     paddingHorizontal: 16,
     backgroundColor: 'rgba(255, 255, 255, 0.8)',
     borderRadius: 16,
     justifyContent: 'center',
  },

  calloutText:{
    color: '#0089a5',
    fontSize: 14,
  },

});
