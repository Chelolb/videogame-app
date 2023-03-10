//import libraries
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import imgExpress from '../../assets/imgTech/express-logo.png';
import imgSequelize from '../../assets/imgTech/sequelize.png'
import imgPostgresql from '../../assets/imgTech/postgresql-full.png';
import { ScrollView } from 'react-native-gesture-handler';

// create a component
const ShowBackend = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={{ fontSize: 20, fontWeight: '200', marginBottom: 5, padding: 10 }}>
                This project uses a backend that has the following technologies and tools...
                </Text>
                <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center' , alignItems: 'center', alignContent: 'center',
                    borderWidth: 2, borderColor: 'purple', borderRadius: 10, marginVertical: 5, alignSelf: 'center',
                    backgroundColor: '#fff'}}>
                    <Image
                        style={{ width: 200, height: 80, resizeMode: 'contain', marginVertical: 5}}
                        source={ imgExpress }
                    />
                </View>
                <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', 
                    borderWidth: 2, borderColor: 'purple', borderRadius: 10, marginVertical: 5, alignSelf: 'center',
                    backgroundColor: '#fff'}}>
                    <Image
                        style={{ width: 230, height: 80, resizeMode: 'contain', marginVertical: 2}}
                        source={ imgSequelize }
                    />
                </View>
                <View style={{ width: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', 
                    borderWidth: 2, borderColor: 'purple', borderRadius: 10, marginVertical: 5, alignSelf: 'center',
                    backgroundColor: '#fff'}}>
                    <Image
                        style={{ width: 200, height: 80, resizeMode: 'contain', marginVertical: 2 }}
                        source={ imgPostgresql }
                    />
                </View>
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D0D0D0',
    },
});

//make this component available to the app
export default ShowBackend;
