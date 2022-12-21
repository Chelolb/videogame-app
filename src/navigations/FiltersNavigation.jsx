//import liraries
import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Filters from '../screens/Filters';
import GenreFilter from '../screens/GenreFilter';
import SourceOption from '../screens/SourceOption';
import SortOption from '../screens/SortOption';

const Drawer = createDrawerNavigator();

// create a component
const FiltersNavigation = () => {
    return (
        <Drawer.Navigator initialRouteName="Source Filter" options={{ headerShown: true }}>
        {/* <Drawer.Navigator initialRouteName="Select Filter" options={{ headerShown: true }}> */}
            {/* <Drawer.Screen name="Select Filter" component={Filters} options={{ headerShown: true }} /> */}
            <Drawer.Screen name="Source Filter" component={SourceOption} />
            <Drawer.Screen name="Genre Filter" component={GenreFilter} />
            <Drawer.Screen name="Sort Options" component={SortOption} />
        </Drawer.Navigator>
    );
};

//make this component available to the app
export default FiltersNavigation;
