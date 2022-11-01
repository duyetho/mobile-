
import Profile from './Profile';
import Home from './Home';
import React from "react";
import Favorite from './Favorite';
import Notify from './Notify';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}  /> 
            <Tab.Screen name="Favorite" component={Favorite} />
            <Tab.Screen name="Profile" component={Profile}/>
            <Tab.Screen name="Notify" component={Notify}  />
        </Tab.Navigator>
    );
}

export default Tabs;