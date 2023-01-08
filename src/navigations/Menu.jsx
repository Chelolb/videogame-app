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
        <Stack.Navigator 
            screenOptions= {{ 
                    headerStyle: { backgroundColor: 'purple', },
                    headerTintColor: 'white'
                }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: true, 
                        title: `Videogame's Galery`}}
            />
            <Stack.Screen 
                name="Detail" 
                component={Detail}
                options={{title: `Videogames Detail`,
                        //    headerShown: false,
                        //    headerTintColor: 'blue',
                        //    hederTitleStyle: { Color: 'green', fontSize: 20},
                        //    headerTitleAlign: 'left', 
                        //    headerBackVisible: false,
                        //    headerBackTitleVisible: false,
                        //    headerBackTitle: 'Return to Home',
                        //    headerBackTitleStyle: { fontSize: 20}
                        }}
            />
        </Stack.Navigator>
    );
};


//make this component available to the app
export default Menu;
