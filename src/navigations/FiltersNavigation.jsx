//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import GenreFilter from '../screens/GenreFilter';
import SourceOption from '../screens/SourceOption';
import SortOption from '../screens/SortOption';
import MenuButtonItem from '../components/MenuButtonItem';

const Drawer = createDrawerNavigator();

// create a component
const FiltersNavigation = () => {
    return (
        <Drawer.Navigator
            drawerContent = {(props) => <MenuItems { ...props } />}
            //  initialRouteName="Source Select" options={{ headerShown: true }}
        >
        {/* <Drawer.Navigator initialRouteName="Select Filter" options={{ headerShown: true }}> */}
            {/* <Drawer.Screen name="Select Filter" component={Filters} options={{ headerShown: true }} /> */}
            <Drawer.Screen name="Source Select" component={SourceOption} />
            <Drawer.Screen name="Genre Filter" component={GenreFilter} />
            <Drawer.Screen name="Sort Options" component={SortOption} />
        </Drawer.Navigator>
    );
};

// *****  the visual aspect del drawer (customing)
const MenuItems = ( { navigation } ) => {

    return(
        <DrawerContentScrollView    // Menu title 
            style={styles.container}>
            <Text style={styles.title}>MovGame</Text>

            <MenuButtonItem
                text = 'Source Select'
                onPress = {() => navigation.navigate('Source Select')}
                icon = 'database'
            />
            
            <MenuButtonItem
                text = 'Genre Filter'
                onPress = {() => navigation.navigate('Genre Filter')}
                icon = 'filter'
            />
            
            <MenuButtonItem
                text = 'Sort Options'
                onPress = {() => navigation.navigate('Sort Options')}
                icon = 'sort-amount-asc'
            />
        </DrawerContentScrollView>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        padding: 15
    },
    title: {
        width: 180,
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: 'blue',
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    }
});


//make this component available to the app
export default FiltersNavigation;
