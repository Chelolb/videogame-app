//import libraries
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
//import TabNavigation from './TabNavigation';
import Menu from './Menu';

// create a component
const Main = () => {
    return (
        <NavigationContainer>{/* Rest of your app code */}
            <Menu/>
        </NavigationContainer>
    );
};

//make this component available to the app
export default Main;