
import Profile from '../components/Profile';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDetail from './StackNavigate';
import MapView from '../components/MapView';
import { Image} from 'react-native';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeStack" component={StackDetail} 
            options={{
                tabBarIcon: ({color, size, focused}) => (
                    <Image
                      source={require('../assets/img/homeicon.png')}
                      style={{
                        width: 30,
                        height: 30,
                        tintColor: '#0d8af0',
                      }}
                    />
                  ),
            }}

            /> 
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <Image
                        source={require('../assets/img/usericon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#0d8af0',
                        }}
                        />
                    ),
                }}

            />
            <Tab.Screen name="Map" component={MapView}
                options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <Image
                        source={require('../assets/img/mapicon.png')}
                        style={{
                            width: 30,
                            height: 30,
                            tintColor: '#0d8af0',
                        }}
                        />
                    ),
                }}
            
            />
        </Tab.Navigator>
    );
}

export default Tabs;