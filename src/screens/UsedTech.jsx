//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imgRedux from '../../assets/imgTech/redux-toolkit.png';
import imgReact from '../../assets/imgTech/react-native.png'

// create a component
const UsedTech = ( { navigation } ) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: '200', marginVertical: 15, padding: 10 }}>
                In this project the following technologies and tools were used...
            </Text>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'rgb(150, 150, 150)', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                        borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                        marginVertical: 5}}>
                <Image
                    style={{ width: 80, height: 100, marginBottom: 15, resizeMode: 'contain' }}
                    source={ imgReact }
                />
                <Text style={{ color: '#63dbfb', fontSize: 30, fontWeight: '400', margin: 10}}> React Native</Text>
            </View>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        borderColor: 'rgb(150, 150, 150)', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                        borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                        marginVertical: 5 }}>
                <Image
                    style={{ width: 80, height: 100, marginBottom: 15, resizeMode: 'contain' }}
                    source={ imgRedux }
                />
                <Text style={{ color: '#643cb4', fontSize: 30, fontWeight: '400', margin: 10}}> Redux ToolKit</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#D0D0D0',
    },
    Title: {
        color: 'blue',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textShadowColor: 'rgba(128, 128, 255, 1)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'blue'
    }
});

//make this component available to the app
export default UsedTech;