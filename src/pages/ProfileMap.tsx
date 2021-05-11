import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import mapMarker from '../../assets/marker.png'
import { RectButton } from 'react-native-gesture-handler';


export default function ProfileMap() {
  const navigation = useNavigation();

  function handleNavigateToProfileDetails() {
    navigation.navigate('ProfileDetails');
  }
  
  function handleNavigateToCreateProfile() {
    navigation.navigate('SelectMapPosition');
  }
  
  return(
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
        <Callout tooltip onPress={handleNavigateToProfileDetails} >
          <View style={styles.calloutContainer}>
          <Text style={styles.calloutText}>nome do usuario</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
    
    <View style={styles.footer}>
      <Text style={styles.footerText}>2 amigos encontrados</Text>

      <RectButton style={styles.createFriendButton} onPress={handleNavigateToCreateProfile}>
        <Feather name="plus" size={20} color="#FFF"/>
      </RectButton>

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
     elevation: 3,
  },

  calloutText:{
    color: '#0089a5',
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
  },

  footer: {
    position: 'absolute',
    left: 24,
    right: 24,
    bottom: 32,

    backgroundColor: '#FFF',
    borderRadius: 20,
    height: 56,
    paddingLeft: 24,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    elevation: 3,
  },
  
  footerText: {
    fontFamily: 'Nunito_700Bold',
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
