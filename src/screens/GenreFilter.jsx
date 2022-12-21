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
        alert(`filter genre: "${value}" activated`)
        navigation.navigate('Principal')
    }

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 28, fontWeight: '400', marginVertical: 25 }}>Select Videogame's Genre</Text>
            <View style={{width: 260, alignSelf: 'center', margin: 5}}>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                />
            </View>
            <View style={{paddingHorizontal: 20, marginVertical: 15}}>
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
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default GenreFilter;