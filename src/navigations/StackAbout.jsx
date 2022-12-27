//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import About from '../screens/About';
import UsedTech from '../screens/UsedTech';
import ShowBackend from '../screens/ShowBackend';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// create a component
const StackAbout = () => {
    return (
        <Stack.Navigator
            screenOptions= {{ 
                headerStyle: { backgroundColor: 'purple', },
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen
                name="Author"
                component={About}
                options={{ headerShown: true, 
                    title: `About`}}
            />
            <Stack.Screen 
                name="Technology" 
                component={UsedTech}
                options={{ headerShown: true }} 
            />
            <Stack.Screen 
                name="Backend Tech" 
                component={ShowBackend}
                options={{ headerShown: true }} 
            />
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default StackAbout;
