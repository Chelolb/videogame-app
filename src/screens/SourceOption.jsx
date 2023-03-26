//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { getVideogameFilter } from '../../reducers';
import { RadioButton } from 'react-native-paper';
import Button from '../components/Button';

// create a component
const SourceOption = ( { navigation } ) => {

    const dispatch = useDispatch();

    const [value, setValue] = React.useState('all');

    function setFilter() {
        dispatch(getVideogameFilter(value));
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 350, alignItems: 'center', marginTop: 5 }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 25 }}>
                    Select Videogame's Source
                </Text>
                <View style={styles.contRadioBtn}>
                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <RadioButton value="all" />
                            <Text style={{fontWeight: 'bold', marginTop: 7}}>All</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <RadioButton value="api" />
                            <Text style={{fontWeight: 'bold', marginTop: 7}}>API</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                            <RadioButton value="db" />
                            <Text style={{fontWeight: 'bold', marginTop: 7}}>DB</Text>
                        </View>
                    </RadioButton.Group>
                </View>
                <Button
                    style={{with: 70, marginVertical: 25 }}
                    title = 'Set'
                    onPress={() => setFilter()}>
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
        backgroundColor: '#D0D0D0',
    },
    contRadioBtn: {
        flex: 1,
        width: 150,
        justifyContent: 'space-evenly' ,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 25,
        marginBottom: 25,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30
    },
    radioButton: {
        margin: 0,
        tintColor: 'green'
    }
});

//make this component available to the app
export default SourceOption;
