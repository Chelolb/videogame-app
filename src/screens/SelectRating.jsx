//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { setNewRating} from "../../reducers";
import Button from '../components/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { TouchableOpacity } from 'react-native-gesture-handler';



// create a component
const SelectRating = ( { route, navigation } ) => {

    const { ratingSelect } = route.params; 
    const dispatch = useDispatch();

    const [ratingValue, setRatingValue] = useState(ratingSelect)

    const arrayRating = [1, 2, 3, 4, 5];

    let selectedRating = 3;

    function setUpRating() {    // send rating value at store

        dispatch(setNewRating(ratingValue));

        navigation.navigate('Create');

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerAll}>
                <Text style={{fontSize: 20, fontWeight: '100', padding: 10, alignSelf: 'center' }}>
                    Select the Rating...
                </Text>

                <View style={{width: 340, alignSelf: 'center', borderRightWidth: 5,
                                borderBottomWidth: 5, borderColor: 'rgb(150, 150, 150)', borderWidth: 2, 
                                borderRadius: 30, backgroundColor: 'white',}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly'}}>
                        {arrayRating?.map((value, index) => {  

                            return (
                                <TouchableOpacity
                                    key = {'Tou' + index}
                                    onPress={() => setRatingValue(index + 1)}
                                >
                                <View style= {{ marginVertical: 15}}>
                                    <Icon
                                        key={index} 
                                        style={{ background_image: 'yellow', marginHorizontal: 10, }}
                                        name= 'star'
                                        size= {30}
                                        color= {ratingValue - 1 >= index ? 'purple' : 'grey'}
                                    />
                                </View>
                                </TouchableOpacity>
                            ) 
                        })}
                    </View>
                </View>
                <View style={{paddingHorizontal: 100, marginVertical: 10}}>
                    <Button
                        enable= {ratingValue > 0 ? true : false}
                        style={{with: 70, marginVertical: 15}}
                        title = 'Set Rating'
                        onPress={() => setUpRating()}>
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
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D0D0D0',
    },
    containerAll: { 
        // borderRightWidth: 5,
        // borderBottomWidth: 5,
        // borderColor: 'rgb(150, 150, 150)',
        // borderWidth: 2,
        // borderRadius: 30, 
        // backgroundColor: 'white',
    },
    containerValue: {
        flexDirection: 'column',
        marginTop: 5,
        padding: 10,
        borderWidth: 1, 
        borderRadius: 5,
        borderColor: 'purple',
    }, 
    containerValue0: {
        borderWidth: 0, 
    },
    txtGenres: { 
        backgroundColor: 'lightblue', 
        marginVertical: 2, 
        paddingHorizontal: 10,
    }
});

//make this component available to the app
export default SelectRating;
