//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imgRedux from '../../assets/imgTech/redux-toolkit.png';
import imgReact from '../../assets/imgTech/react-native.png'

// create a component
const UsedTech = () => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: '200', marginBottom: 35, padding: 10 }}>In this project the following technologies and tools were used...</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                <Image
                    style={{ width: 80, height: 100, marginBottom: 15, resizeMode: 'contain' }}
                    source={ imgReact }
                />
                <Text style={{ color: '#63dbfb', fontSize: 30, fontWeight: '400', margin: 10}}> React Native</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default UsedTech;
