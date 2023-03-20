//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { getVideogameFilter } from '../../reducers';
import { CheckBox } from '@rneui/themed';
import Button from '../components/Button';

// create a component
const SourceOption = ( { navigation } ) => {

    const dispatch = useDispatch();

    const [all, setAll] = useState(true);
    const [api, setApi] = useState(false)
    const [db, setDb] = useState(false)
    const [option, setOption] = useState("all")

    const optionAll = () => {
        setAll(true);
        setApi(false);
        setDb(false);
        setOption("all");
    }

    const optionApi = () => {
        setAll(false);
        setApi(true);
        setDb(false);
        setOption("api");
    }

    const optionDb = () => {
        setAll(false);
        setApi(false);
        setDb(true);
        setOption("db");
    }

    function setFilter() {
        dispatch(getVideogameFilter(option));
        //alert(`Option source: "${option}" activado`)
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: 350, alignItems: 'center', marginTop: 5 }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 25 }}>
                    Select Videogame's Source
                </Text>
                <View style={styles.contRadioBtn}>
                    <CheckBox
                        style = {styles.radioButton}
                        title= "All"
                        center
                        checked = {all}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        checkedColor='purple'
                        onPress={optionAll}
                        />
                    <CheckBox
                        style = {{margin: 0}}
                        title= "API"
                        center
                        checked = {api}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        checkedColor='purple'
                        onPress={optionApi}
                    />
                    <CheckBox
                        style = {{margin: 0}}
                        title= "DB"
                        center
                        checked = {db}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        checkedColor='purple'
                        onPress={optionDb}
                    />
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
        //backgroundColor: 'lightblue',
        backgroundColor: '#D0D0D0',
    },
    contRadioBtn: {
        flex: 1,
        width: 150,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 25,
        marginBottom: 25,
        //borderColor: '#739D00',
        // borderColor: '#FFEB73',
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
