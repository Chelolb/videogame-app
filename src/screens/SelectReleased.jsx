//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { setNewReleased} from "../../reducers";
import Button from '../components/Button';
import DatePicker from 'react-native-modern-datepicker';
import { getToday, getFormatedDate } from 'react-native-modern-datepicker';



// create a component
const SelectReleased = ( { route, navigation } ) => {

    const { releasedSelect } = route.params; 
    const dispatch = useDispatch();

    const [selectedDate, setSelectedDate] = useState(getToday());

    function setUpRelease() {    // send released date at store

        dispatch(setNewReleased(selectedDate));

        navigation.navigate('Create');

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerAll}>
                <Text style={{fontSize: 20, fontWeight: '100', padding: 10, alignSelf: 'center' }}>
                    Select the Release Date...
                </Text>

                <View style={{width: 340, alignSelf: 'center', borderRightWidth: 5,
                                borderBottomWidth: 5, borderColor: 'rgb(150, 150, 150)', borderWidth: 2, 
                                borderRadius: 30, backgroundColor: 'white',}}>
                    <DatePicker 
                        options={{textHeaderColor: 'purple', selectedTextColor: 'white',}}
                        style={{ borderRadius: 30}}
                        selected = {releasedSelect.length === 0 ? selectedDate : releasedSelect}
                        mode="calendar"
                        onSelectedChange={date => setSelectedDate(date)}
                    />
                    </View>
                    <View style={{paddingHorizontal: 100, marginVertical: 10}}>
                        <Button
                            enable= {selectedDate.length ? true : false}
                            style={{with: 70, marginVertical: 15}}
                            title = 'Set Released'
                            onPress={() => setUpRelease()}>
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
export default SelectReleased;
