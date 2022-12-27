//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet } from 'react-native';
import { setNewGenres, getAllGenres } from "../../reducers";
import Button from '../components/Button';
import DropDownPicker from 'react-native-dropdown-picker';

// create a component
const SelectGenres = ( { route, navigation } ) => {

    const { genresSelect } = route.params; 
    const dispatch = useDispatch();

    const [openG, setOpenG] = useState(false);
    const [valueG, setValueG] = useState([]); 
    
          
    useEffect(() => { // if have params => read and create array

        if (genresSelect.length) {
            //console.log(genresSelect);
            let Selected = genresSelect.split(', ');
            setValueG(Selected);
        }

    }, []);

    let itemsGenres = [];
    
    let allGenres= [];

    let dataGenres = [            //  alternative itemGenres for Genres picker`s items
        {label: "Action", value: "Action"},
        {label: "Adventure", value: "Adventure"},
        {label: "RPG", value: "RPG"},
        {label: "Shooter", value: "Shooter"},
        {label: "Puzzle", value: "Puzzle"},
        {label: "Indie", value: "Indie"},
        {label: "Platformer", value: "Platformer"},
        {label: "Massively Multiplayer", value: "Massively Multiplayer"},
        {label: "Racing", value: "Racing"},
        {label: "Sports", value: "Sports"},
        {label: "Simulation", value: "Simulation"},
        {label: "Arcade", value: "Arcade"},
        {label: "Fighting", value: "Fighting"},
        {label: "Strategy", value: "Strategy"},
        {label: "Casual", value: "Casual"},
        {label: "Family", value: "Family"},
        {label: "Educational", value: "Educational"}
    ]

    useEffect(() => { dispatch(getAllGenres()) }, [dispatch]);    // call all genres
            
    allGenres = useSelector((state) => state.VIDEOGAMES.allGenres);

    allGenres.length     // load types in  Genres picker's items
    ? allGenres.map(c => itemsGenres.push({ label: c.name, value: c.name }))
    : itemsGenres = dataGenres;
  
    // function handleGenre(){      // update Genres selected
    //     setGenres(valueG)
    // }

    function setUpGenres() {    // send genres array at store

        //alert('Genres selected');

        let valor = (valueG.join(', '))

        dispatch(setNewGenres(valor));

        navigation.navigate('Create');

    };

    return (
        <View style={styles.container}>
            <View style={styles.containerAll}>
                <Text style={{fontSize: 20, fontWeight: '100', padding: 10, alignSelf: 'center' }}>Select the Genres...</Text>

                <View style={{width: 260, alignSelf: 'center', padding: 20}}>
                        <DropDownPicker
                            style={{
                                //backgroundColor: 'lightblue', 
                                borderColor: 'purple'}}
                            multiple={true}
                            min={0}
                            max={4}
                            open={openG}
                            value={valueG}
                            items={itemsGenres}
                            setOpen={setOpenG}
                            setValue={setValueG}
                            //onChangeValue ={handleGenre}
                        />
                        <View style={valueG.length ? styles.containerValue : styles.containerValue0}>
                        { valueG
                            ? valueG.map((c, index) => {         //  show selected type
                                return (
                                    <View style={styles.valueLabel} key={index} >
                                        <Text style={styles.txtGenres}>{c}</Text>
                                    </View>
                                )
                            })
                            : (null)
                        }
                    </View>
                </View>
                    <View style={{paddingHorizontal: 100, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Set Genres'
                            onPress={() => setUpGenres()}>
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
        borderWidth: 4, 
        borderColor: '#FFEB73',
        borderRadius: 10,
        backgroundColor: 'white',
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
export default SelectGenres;
