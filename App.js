import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Banner from './components/Banner';
import TopProducts from './components/TopProducts';

// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (

//     <Tab.Navigator>
//       <Tab.Screen name="banner" component={Banner} />
//       <Tab.Screen name="topproduct" component={TopProducts} />
//     </Tab.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
        <Banner/>
        <TopProducts/>
    </NavigationContainer>
  );
}