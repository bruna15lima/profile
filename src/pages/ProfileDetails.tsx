import React from 'react';
import { Image, View, ScrollView, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from '@expo/vector-icons';

import mapMarkerImg from '../../assets/marker.png';
import { RectButton } from 'react-native-gesture-handler';

export default function ProfileDeatils() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagesContainer}>
        <ScrollView horizontal pagingEnabled>
          <Image style={styles.image} source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQEPyy1DwB4JBQ/profile-displayphoto-shrink_800_800/0/1618913982558?e=1626307200&v=beta&t=Z45xcEz-vSfi5PYaZfzrjv4F8NXt8-SWlT53M83b2Ao' }} />
          <Image style={styles.image} source={{ uri: 'https://scontent.fmcz9-1.fna.fbcdn.net/v/t1.6435-1/p200x200/169953687_10217807952886659_7317202563703260807_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=7206a8&_nc_ohc=7FIo1Jh5gC8AX_dEehQ&_nc_ht=scontent.fmcz9-1.fna&tp=6&oh=51bc0d68fa4fb96b92e051dcd764533d&oe=60C221E9' }} />
          <Image style={styles.image} source={{ uri: 'https://avatars.githubusercontent.com/u/5524114?v=4' }} />
        </ScrollView>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Bruna Lima</Text>
        <Text style={styles.description}>Developer/designer UX, experiência com direção de arte.</Text>
      
        <View style={styles.mapContainer}>
          <MapView 
            initialRegion={{
              latitude: -27.2092052,
              longitude: -49.6401092,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }} 
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
            style={styles.mapStyle}
          >
            <Marker 
              icon={mapMarkerImg}
              coordinate={{ 
                latitude: -27.2092052,
                longitude: -49.6401092
              }}
            />
          </MapView>

          <View style={styles.routesContainer}>
            <Text style={styles.routesText}>Ver rotas no Google Maps</Text>
          </View>
        </View>
      
        <View style={styles.separator} />

        <Text style={styles.title}>Mais informações</Text>
        <Text style={styles.description}>Para entrar em comtato comigo é só clicar no botão abaixo.</Text>

        <View style={styles.scheduleContainer}>
          <View style={[styles.scheduleItem, styles.scheduleItemBlue]}>
            <Feather name="clock" size={40} color="#2AB5D1" />
            <Text style={[styles.scheduleText, styles.scheduleTextBlue]}>Segunda à Sexta 8h às 18h</Text>
          </View>
          <View style={[styles.scheduleItem, styles.scheduleItemGreen]}>
            <Feather name="info" size={40} color="#39CC83" />
            <Text style={[styles.scheduleText, styles.scheduleTextGreen]}>Atendemos fim de semana</Text>
          </View>
        </View>

        <RectButton style={styles.contactButton} onPress={() => {}}>
          <FontAwesome name="whatsapp" size={24} color="#FFF" />
          <Text style={styles.contactButtonText}>Entrar em contato</Text>
        </RectButton>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagesContainer: {
    height: 240,
  },

  image: {
    width: Dimensions.get('window').width,
    height: 240,
    resizeMode: 'cover',
  },

  detailsContainer: {
    padding: 24,
  },

  title: {
    color: '#4D6F80',
    fontSize: 30,
    fontFamily: 'Nunito_700Bold',
  },

  description: {
    fontFamily: 'Nunito_600SemiBold',
    color: '#5c8599',
    lineHeight: 24,
    marginTop: 16,
  },

  mapContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1.2,
    borderColor: '#B3DAE2',
    marginTop: 40,
    backgroundColor: '#E6F7FB',
  },

  mapStyle: {
    width: '100%',
    height: 150,
  },

  routesContainer: {
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  routesText: {
    fontFamily: 'Nunito_700Bold',
    color: '#0089a5'
  },

  separator: {
    height: 0.8,
    width: '100%',
    backgroundColor: '#D3E2E6',
    marginVertical: 40,
  },

  scheduleContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  scheduleItem: {
    width: '48%',
    padding: 20,
  },

  scheduleItemBlue: {
    backgroundColor: '#E6F7FB',
    borderWidth: 1,
    borderColor: '#B3DAE2',
    borderRadius: 20,
  },

  scheduleItemGreen: {
    backgroundColor: '#EDFFF6',
    borderWidth: 1,
    borderColor: '#A1E9C5',
    borderRadius: 20,
  },

  scheduleText: {
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 20,
  },

  scheduleTextBlue: {
    color: '#5C8599'
  },

  scheduleTextGreen: {
    color: '#37C77F'
  },

  contactButton: {
    backgroundColor: '#3CDC8C',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 56,
    marginTop: 40,
  },

  contactButtonText: {
    fontFamily: 'Nunito_800ExtraBold',
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  }
})