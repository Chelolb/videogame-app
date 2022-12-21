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
                    <Text style={{fontSize: 35, fontWeight: '600'}}>MovGame</Text>
                </View>
                <Text style={{ marginBottom: 5}}>developer by:</Text>
                <View style={{  alignItems: 'center', borderWidth: 2, borderRadius: 10}}>
                    <View style= {{ marginTop: 5}}>
                        <Image style={styles.cardimg} source={ marceimg } />
                    </View>
                    <Text style={{fontSize: 25, fontWeight: '400', paddingHorizontal: 5, paddingBottom: 5}}>
                        Ing. Marcelo Litwin
                    </Text>
                </View>
            </View>
             <View style={{ flexDirection: 'column', justifyContent: 'center', width: 310, alignItems: 'center', marginTop: 10}}>
                <Text style={{ width: 290, borderWidth: 2, borderRadius: 10, padding: 10, textAlign: 'justify'}}>
                    This application is a "mobile version" of the frontend,
                    that consumes the data from the API backend of my version
                     VideoGames Project.
                </Text>
            </View>
            <View style={{ marginTop: 10}}>
                <Button                    // show Technology button
                    title = 'Show Technology'
                    onPress={() => navigation.navigate('Technology')}>
                </Button>
            </View>
           <View style={{alignItems: 'center', justifyContent: 'center', 
                            margin: 15, borderRadius: 5, backgroundColor: 'lightgreen'}}>
                <Text style={{color: 'blue', padding: 5}}>NOTE: This App is in continuous updating and improvements features</Text>
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
    cardimg: {
        maxHeight: 100,
        maxWidth: 100,
        resizeMode:"contain",
        borderRadius: 50,
    }
});

//make this component available to the app
export default About;
