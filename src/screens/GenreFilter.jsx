//import libraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { getAllGenres, getVideogameByGenre } from "../../reducers";
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';


// create a component
const GenreFilter = ( { navigation } ) => {
    
    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    let items = [{label: "all", value:"all"}];

    useEffect(() => { dispatch(getAllGenres()) }, [dispatch]);    // call all types
            
    let allGenres = useSelector((state) => state.VIDEOGAMES.allGenres);
 
    allGenres.length
    ? allGenres.map(c => items.push({ label: c.name, value: c.name }))
    : null;

    function setFilter() {
        dispatch(getVideogameByGenre(value));
        //alert(`filter genre: "${value}" activated`)
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <View style={{width: 330, alignItems: 'center'}}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginTop: 25, marginBottom: 25 }}>
                    Select Videogame's Genre
                </Text>
                <View style={{ width: 250}}>
                    <DropDownPicker
                        style={styles.pickerStyle}
                        open={open}
                        value={value}
                        items={items}
                        setOpen={setOpen}
                        setValue={setValue}
                    />
                </View>
                <View style={{width: 75, marginTop: 150, alignSelf: 'center'}}>
                    <Button
                        style={{with: 40, marginVertical: 25 }}
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
        //backgroundColor: 'lightblue',
        backgroundColor: '#D0D0D0',
    },
    pickerStyle: { 
        width: 250, 
        backgroundColor: 'white',
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30,
        marginBottom: 25, 
        marginTop: 30, 
        alignSelf: 'center'}
});

//make this component available to the app
export default GenreFilter;