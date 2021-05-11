import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import ProfileMap from './pages/ProfileMap'
  
export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="ProfileMap" component={ProfileMap}/>
      </Navigator>
    </NavigationContainer>
  )
}