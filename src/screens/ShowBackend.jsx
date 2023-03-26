//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imgExpress from '../../assets/imgTech/express-logo.png';
import imgSequelize from '../../assets/imgTech/sequelize.png'
import imgPostgresql from '../../assets/imgTech/postgresql-full.png';

// create a component
const ShowBackend = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, fontWeight: '200', marginBottom: 5, padding: 10 }}>
            This project uses a backend that has the following technologies and tools...
            </Text>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center' , alignItems: 'center', alignContent: 'center',
                            borderColor: 'rgb(150, 150, 150)', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                            borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                            marginVertical: 5, alignSelf: 'center'}}>
                <Image
                    style={{ width: 200, height: 80, resizeMode: 'contain', marginVertical: 5}}
                    source={ imgExpress }
                />
            </View>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', 
                            borderColor: 'rgb(150, 150, 150)', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                            borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                            marginVertical: 5, alignSelf: 'center'}}>
                <Image
                    style={{ width: 230, height: 90, resizeMode: 'contain' }}
                    source={ imgSequelize }
                />
            </View>
            <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', 
                            borderColor: 'rgb(150, 150, 150)', borderWidth: 2, borderRadius: 10, borderBottomWidth: 5, 
                            borderRightWidth: 5, borderBottomRightRadius: 10, backgroundColor: 'white', 
                            marginVertical: 5, alignSelf: 'center'}}>
                <Image
                    style={{ width: 200, height: 100, resizeMode: 'contain' }}
                    source={ imgPostgresql }
                />
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
        justifyContent: 'center',
        backgroundColor: 'blue'
    }
});

//make this component available to the app
export default ShowBackend;
