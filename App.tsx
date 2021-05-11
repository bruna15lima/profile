import React, { useReducer } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons'

import MapView  from 'react-native-maps'
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
      
      <View style={styles.footer}>
        <Text style={styles.footerText}>2 amigos encontrados</Text>

        <TouchableOpacity style={styles.createFriendButton} onPress={() => {}}>
          <Feather name="plus" size={20} color="#FFF"/>
        </TouchableOpacity>

      </View>
     
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

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 46,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  footerText: {
    color: '#8fa7c3',
  },

  createFriendButton: {
    width: 56,
    height: 56,
    backgroundColor: '#15c5d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },


});
