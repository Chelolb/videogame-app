//import libraries
import { View, TextInput, Text, Image, StyleSheet } from 'react-native';
import { useState } from "react";
import Button from './Button';
import {useDispatch} from "react-redux";
import { getVideogameByName, getAllVideogames } from "../../reducers";


export default function SearchBar(){
    const dispatch = useDispatch()
    const [name, setName] = useState('')


    function handleSearch(e){       // search button function
        e.preventDefault()
        if(!name || !isNaN(name)){          // if input is empy
            alert('Must indicate a word to search!');   
        }else if (name.toLowerCase() === 'all'){
            dispatch(getAllVideogames())   // call endpoint AllView;
            setName('');
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
        width: 260,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderWidth: 3,
        borderRadius: 30,
        borderColor: 'rgb(150, 150, 150)',
        backgroundColor: 'white'
    },
    input: {
        width: 150,
        height: 35,
        marginRight: 5,
        marginLeft: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'violet',
        padding: 10,
        backgroundColor: 'white'
    },
  });
  