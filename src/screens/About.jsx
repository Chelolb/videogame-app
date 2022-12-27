//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import marceimg from '../../assets/imgAbout/marceimg.png';

// create a component
const About = ( { navigation} ) => {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'flex-start', alignItems: 'center'}}>
                <View>
                    <Text style={styles.nameApp}>
                        MovGame
                    </Text>
                </View>
                <Text style={{ marginBottom: 5}}>developer by:</Text>
                <View style={styles.groupAuthor}>
                    <View style= {{ marginTop: 5}}>
                        <Image style={styles.cardimg} source={ marceimg } />
                    </View>
                    <Text style={{fontSize: 25, fontWeight: '400', paddingHorizontal: 5, paddingBottom: 5}}>
                        Ing. Marcelo Litwin
                    </Text>
                </View>
            </View>
             <View style={styles.notaStyle}>
                <Text style={styles.txtNotaStyle}>
                    This application is a "mobile version" of the frontend,
                    that consumes the data from the API backend of my version
                     VideoGames Project.
                </Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', 
                            margin: 15, borderRadius: 5, backgroundColor: '#FFEB73'}}>
                <Text style={{color: 'purple', padding: 5}}>NOTE: This App is in continuous updating and improvements features</Text>
            </View>
            <View style={{ marginBottom: 10}}
            >
                <Button                    // show Technology button
                    title = 'Show Technology'
                    onPress={() => navigation.navigate('Technology')}>
                </Button>
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
        //backgroundColor: 'lightblue',
        backgroundColor: '#D0D0D0',
    },
    nameApp: {
        width: 180,
        paddingHorizontal: 30,
        paddingVertical: 10,
        color: 'purple',
        borderRadius: 10,
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        alignSelf: 'center',
        backgroundColor: '#FFEB73'   
    },
    groupAuthor: { 
        alignItems: 'center', 
        borderRadius: 10, 
        backgroundColor: 'white', 
        borderColor: 'purple',
        borderWidth: 2,
    },
    cardimg: {
        maxHeight: 100,
        maxWidth: 100,
        resizeMode:"contain",
        borderRadius: 50,
    },
    notaStyle: { 
        flexDirection: 'column', 
        justifyContent: 'center', 
        width: 310, 
        alignItems: 'center', 
        marginTop: 10
    },
    txtNotaStyle: { 
        width: 290, 
        borderColor: 'purple',
        borderWidth: 2,
        borderRadius: 10, 
        padding: 10, 
        textAlign: 'justify', 
        backgroundColor: 'white'
    }
});

//make this component available to the app
export default About;
