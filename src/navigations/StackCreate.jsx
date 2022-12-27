//import libraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Create from '../screens/Create'
import SelectPlatforms from '../screens/SelectPlatforms';
import SelectGenres from '../screens/SelectGenres';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

// create a component
const StackCreate = () => {
    return (
        <Stack.Navigator
            screenOptions= {{ 
                headerStyle: { backgroundColor: 'purple', },
                headerTintColor: 'white'
            }}
        >
            <Stack.Screen
                name="Create"
                component={Create}
                options={{ headerShown: true, 
                        title: `Create Videogame`}}
            />
            <Stack.Screen 
                name="Select Plataforms" 
                component={SelectPlatforms} 
                options={{title: `Select Plataforms`}}/>
            <Stack.Screen 
                name="Select Genres" 
                component={SelectGenres} 
                options={{title: `Select Genres`}}/>
        </Stack.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default StackCreate;
