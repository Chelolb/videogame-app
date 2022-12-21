//import liraries
import React, { Component } from 'react';
import { View } from 'react-native';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


// create a component
const Menu = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: true, 
                        title: `Videogames's Galery`}}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail} 
                options={{title: `Videogames Detail`}}/>
        </Stack.Navigator>
    );
};


//make this component available to the app
export default Menu;
