//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
//import Home from '../screens/Home';
import TabNavigation from './TabNavigation';
import Detail from '../screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const Stack = createNativeStackNavigator();


// create a component
const Menu = () => {
    return (
        <Stack.Navigator 
            screenOptions= {{ 
                    headerStyle: { backgroundColor: 'purple'},
                    headerTintColor: 'white'
                }}
        >
            <Stack.Screen
                name="Galery"
                component={TabNavigation}
                options={{ headerShown: false, 
                            title: `Videogame's Galery`}}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{title: `Videogame Detail` }}
            />
        </Stack.Navigator>
    );
};


//make this component available to the app
export default Menu;
