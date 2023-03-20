//import libraries
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { getVideogameSortByName, getVideogameSortByRating } from '../../reducers';
import { CheckBox } from '@rneui/themed';
import Button from '../components/Button';

// create a component
const SortOption = ( { navigation } ) => {

    const dispatch = useDispatch();
    
    const [name, setName] = useState(true);
    const [ranking, setRating] = useState(false)
    const [option, setOption] = useState("name")

    const [sortNameUp, setSortNameUp] = useState(true)
    const [sortNameDown, setSortNameDown] = useState(false)
    const [optionSortName, setOptionSortName] = useState("up")

    const [sortRatingUp, setSortRatingUp] = useState(false)
    const [sortRatingDown, setSortRatingDown] = useState(false)
    const [optionSortRating, setOptionSortRating] = useState("up")

    const optionName = () => {
        setName(true);
        setRating(false);
        setOption("name");

        setSortNameUp(true);
        setSortNameDown(false);
        setOptionSortName("up");
        setSortRatingUp(false);
        setSortRatingDown(false);
    }

    const optionRating = () => {
        setName(false);
        setRating(true);
        setOption("rating");

        setSortNameUp(false);
        setSortNameDown(false);
        setOptionSortRating("up");
        setSortRatingUp(true);
        setSortRatingDown(false);
    }

    const optionNameUp = () => {
        setSortNameUp(true);
        setSortNameDown(false);
        setOptionSortName("up");
    }

    const optionNameDown = () => {
        setSortNameUp(false);
        setSortNameDown(true);
        setOptionSortName("down");
    }

    const optionRatingUp = () => {
        setSortRatingUp(true);
        setSortRatingDown(false);
        setOptionSortRating("up");
    }

    const optionRatingDown = () => {
        setSortRatingUp(false);
        setSortRatingDown(true);
        setOptionSortRating("down");
    }




    function setFilter() {
        if (option === "name"){
            dispatch(getVideogameSortByName(optionSortName));
            //alert(`Sort by "${option} ${optionSortName}" activate`)
            navigation.navigate('Principal')
        }
        else {
            dispatch(getVideogameSortByRating(optionSortRating));
            //alert(`Sort by "${option} ${optionSortRating}" activate`)
            navigation.navigate('Principal')
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.container}>
            <View style={{ width: '100%', height: 460, alignItems: 'center' }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 5}}>Select Sort Criteria</Text>
                <View style={styles.contRadioBtnGroup}>
                    <CheckBox
                        style = {styles.radioButton}
                        title= "Sort By Alphabetically Name"
                        center
                        checked = {name}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        checkedColor='purple'
                        onPress={optionName}
                        />
                        {option === "rating"
                        ?
                        <View style={styles.groupIntStyle}>
                            <CheckBox
                                disabled = {true}
                                title= "Up"
                                center
                                checked = {sortNameUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionNameUp}
                            />                             
                            <CheckBox
                                disabled = {true}
                                title= "Down"
                                center
                                checked = {sortNameDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionNameDown}
                            />
                        </View>
                        :
                        <View style={styles.groupIntStyle}>
                            <CheckBox
                                title= "Up"
                                center
                                checked = {sortNameUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionNameUp}
                            />
                            <CheckBox
                                title= "Down"
                                center
                                checked = {sortNameDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionNameDown}
                            />
                        </View>    
                        }
                </View>
                <View style={styles.contRadioBtnGroup}>
                    <CheckBox
                        style = {styles.radioButton}                    
                        title= "Sort By Rating Level"
                        center
                        checked = {ranking}
                        checkedIcon = "dot-circle-o"
                        uncheckedIcon='circle-o'
                        checkedColor='purple'
                        onPress={optionRating}
                    />
                       {option === "name" 
                       ?
                        <View style={styles.groupIntStyle}>

                            <CheckBox
                                disabled = {true}
                                title= "Up"
                                center
                                checked = {sortRatingUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionRatingUp}
                            />
                            <CheckBox
                                disabled = {true}
                                title= "Down"
                                center
                                checked = {sortRatingDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionRatingDown}
                            />
                        </View>
                        :
                        <View style={styles.groupIntStyle}>
                            <CheckBox
                                title= "Up"
                                center
                                checked = {sortRatingUp}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionRatingUp}
                            />
                            <CheckBox
                                title= "Down"
                                center
                                checked = {sortRatingDown}
                                checkedIcon = "dot-circle-o"
                                uncheckedIcon='circle-o'
                                checkedColor='purple'
                                onPress={optionRatingDown}
                            />    
                        </View>
                        }                   
                </View>
                <Button
                    style={{with: 70, marginVertical: 25 }}
                    title = 'Set'
                    onPress={() => setFilter()}>
                </Button>
            </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#D0D0D0'
    },
    contRadioBtnGroup: {
        flex: 1,
        width: 285,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        margin: 2,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30
    },
    groupIntStyle: {
        alignItems: 'flex-start',
        marginBottom: 15, 
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30,
 
    }
});

//make this component available to the app
export default SortOption;
