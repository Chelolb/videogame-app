//import libraries
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';
import { useState } from "react";
import Button from './Button';
import {useDispatch} from "react-redux";
import { getVideogameByName } from "../../reducers";


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    function handleSearch(e){       // search button function
        e.preventDefault()
        if(!name || !isNaN(name)){          // if input is empy
            alert('Must indicate a word to search!');   
        }else{                             // call endpoint Search By name
            dispatch(getVideogameByName(name.toLowerCase())) 
            setName('');
        }
    }

    return(
        <View style={styles.searchStyle}>
             <TextInput 
                    style={styles.input} 
                    value={name}
                    placeholder= 'search word'
                    onChangeText={setName} />
            <Button
                title = 'Search'
                onPress={(e) => handleSearch(e)}>
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    
    searchStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'green'
    },
    input: {
        width: 150,
        height: 35,
        marginRight: 5,
        marginLeft: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightgreen',
        padding: 10,
    },
  });
  