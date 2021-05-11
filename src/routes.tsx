import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import ProfileMap from './pages/ProfileMap';
import ProfileDetails from './pages/ProfileDetails';
import SelectMapPosition from './pages/CreateProfile/SelectMapPosition';
import ProfileData from './pages/CreateProfile/ProfileData';
import  Header  from './components/Header';



export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: true, cardStyle: { backgroundColor: '#f2f3f5' } }}>
        <Screen 
        name="ProfileMap" 
        component={ProfileMap}
        //options={{}}
        />
        <Screen 
        name="ProfileDetails" 
        component={ProfileDetails}
        options={{
          headerShown: true,
          header: () => <Header title="Perfil"/>
        }}
        />
        <Screen 
        name="SelectMapPosition" 
        component={SelectMapPosition}
        //options={{}}
        />
        <Screen 
        name="ProfileData" 
        component={ProfileData}
        //options={{}}
        />
      </Navigator>
    </NavigationContainer>
  )
}