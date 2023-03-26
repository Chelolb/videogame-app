//import libraries
import React, { useState } from 'react';
import { useDispatch } from "react-redux"
import { View, Text, StyleSheet } from 'react-native';
import { getVideogameSortByName, getVideogameSortByRating } from '../../reducers';
import { RadioButton } from 'react-native-paper';
import Button from '../components/Button';

// create a component
const SortOption = ( { navigation } ) => {

    const dispatch = useDispatch();

    const [option, setOption] = React.useState('name');
    const [sort, setSort] = React.useState('up');

    function setFilter() {
        if (option === "name"){
            dispatch(getVideogameSortByName(sort));
            navigation.navigate('Principal')
        }
        else {
            dispatch(getVideogameSortByRating(sort));
            navigation.navigate('Principal')
        }
    }

    return (
        <View style={styles.container}>
        
                <Text style={styles.titleStyle}>
                    Select Sort Criteria
                </Text>

                <View style={styles.contRadioBtnGroup}>

                    <Text style={styles.subtitleStyle}>Select by...</Text>

                    <View style={styles.groupIntStyle}>      
                        <RadioButton.Group 
                            onValueChange={newOption => setOption(newOption)} 
                            value={option}
                        >
                            <View style={styles.radioButtonStyle}>
                                <RadioButton value="name" color='purple' />
                                <Text style={styles.textRadioButton}>Alphabetically</Text>
                            </View>
                            <View style={styles.radioButtonStyle}>
                                <RadioButton value="rating" color='purple' />
                                <Text style={styles.textRadioButton}>Rating</Text>
                            </View>
                        </RadioButton.Group>  
                    </View>
                        
                    <Text style={styles.subtitleStyle}>Sort by...</Text>

                    <View style={styles.groupIntStyle}>

                        <RadioButton.Group 
                            onValueChange={newSort => setSort(newSort)} 
                            value={sort}
                        >
                            <View style={styles.radioButtonStyle}>
                                <RadioButton value="up" color='purple' />
                                <Text style={styles.textRadioButton}>Up</Text>
                            </View>
                            <View style={styles.radioButtonStyle}>
                                <RadioButton value="down" color='purple' />
                                <Text style={styles.textRadioButton}>Down</Text>
                            </View>
                        </RadioButton.Group>             
                    </View> 

                </View>
                
                <Button
                    style={styles.buttonStyle}
                    title = 'Set'
                    onPress={() => setFilter()}>
                </Button>
            
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
    titleStyle: { 
        fontSize: 28, 
        fontWeight: '400', 
        marginVertical: 15
    },
    contRadioBtnGroup: {
        width: 285,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30
    },
    subtitleStyle: { 
        fontSize: 20, 
        paddingTop: 10,
        paddingBottom: 5, 
    },
    groupIntStyle: {
        alignItems: 'flex-start',
        marginBottom: 20, 
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30,
    },
    radioButtonStyle: { 
        flexDirection: 'row', 
        justifyContent: 'flex-start',
        paddingHorizontal: 30,
        paddingVertical: 5,
    },
    textRadioButton: {
        fontWeight: 'bold', 
        marginTop: 7
    },
    buttonStyle: {
        with: 70, 
        marginVertical: 25 
    }
});

//make this component available to the app
export default SortOption;
