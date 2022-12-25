//import liraries
import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// create a component
const MenuButtonItem = ( { text, onPress, icon } ) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}
            onPress= { onPress }>
            <Ionicons 
                name= {icon}
                size= {30}
                color= 'white'
            />
            <Text style={styles.buttonTxt}>{ text }</Text>
        </TouchableOpacity>
    );
};

// define your styles
const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        backgroundColor: 'purple',
        borderRadius: 10,
        marginBottom: 15,
        padding: 15
    },
    buttonTxt: { 
        color: 'white',
        fontSize: 20,
        fontWeight: 'bolt',
        marginLeft: 15
    }
});

//make this component available to the app
export default MenuButtonItem;
