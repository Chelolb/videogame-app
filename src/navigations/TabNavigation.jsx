//import liraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import FiltersNavigation from '../navigations/FiltersNavigation';
import StackCreate from './StackCreate';
import TabAbout from '../navigations/TabAbout';


const Tab = createBottomTabNavigator();

// create a component
const TabNavigation = ( {navigation} ) => {
    return (
        <Tab.Navigator             // define the Botton-tab 
        initialRouteName="Principal" // here define the "start" tab
        screenOptions={( { route }) => ({
        tabBarIcon: ({ focused, color, size }) => { // according to the tab state
            let iconName;                           // show the corresponding icono

            if (route.name === 'Principal') {
                iconName = focused
                    ? 'home'
                    : 'home';
            } else if (route.name === 'Filters') {
                iconName = focused 
                    ? 'filter' 
                    : 'filter';
            }else if (route.name === 'New Videogame') {
                iconName = focused 
                    ? 'plus-square' 
                    : 'plus-square-o';
            }else if (route.name === 'About Us') {
                iconName = focused 
                    ? 'drivers-license' 
                    : 'drivers-license-o';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
        },

        tabBarActiveTintColor: 'purple',   // Icon's colors in the diferents states
        tabBarInactiveTintColor: '#D0D0D0'
        })}       
    >
            <Tab.Screen name="Principal" component={Home} options={{ headerShown: false }}/>
            <Tab.Screen name="Filters" component={FiltersNavigation} options={{ headerShown: false }}/>
            <Tab.Screen name="New Videogame" component={StackCreate} options={{ headerShown: false }}/>
            <Tab.Screen name="About Us" component={TabAbout} 
                                        options={{ headerShown: true, title: 'About',
                                                    headerStyle: { backgroundColor: 'purple', },
                                                    headerTintColor: 'white' }}/>
        </Tab.Navigator>
    );
};

//make this component available to the app
export default TabNavigation;