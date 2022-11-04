
import Profile from '../components/Profile';
import React from "react";
import Notify from '../components/Notify';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDetail from './StackNavigate';
import MapView from '../components/MapView';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={StackDetail} /> 
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Notify" component={Notify}  />
            <Tab.Screen name="Map" component={MapView}/>
        </Tab.Navigator>
    );
}

export default Tabs;