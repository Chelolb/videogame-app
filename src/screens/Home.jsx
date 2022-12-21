//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { getAllVideogames } from "../../reducers";
import Card from '../components/Card';
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";

// create a component
const Home = ( {navigation} ) => {

    const dispatch = useDispatch();  
    
    useEffect(() => { dispatch(getAllVideogames()) }, [dispatch]);    // call all videogames endpoint
    
    let currentVideogame = useSelector((state) => state.VIDEOGAMES.allVideogameFiltered)

    //console.log(currentVideogame.length)

    function handleViewAll(e){       // ViewAll button function                       
        dispatch(getAllVideogames())   // call endpoint AllView;
    }

    return (
        <SafeAreaView style={styles.container}>
            {/* <SearchBar/> */}
            <ScrollView contentContainerStyle={styles.ScrollViewStyles}>
                <View>
                {!currentVideogame.length ?    //  if array have not elements
                
                (currentVideogame.msg        
                    ?                           //  if is error menssage                                 
                    <View>
                        <Text>{currentVideogame.msg}</Text>
                    </View>  
                    :                       //  if is searching...                  
                    <View style={{alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={{fontSize: 20, fontWeight: '200'}}>
                            Searching data, a moment please...
                        </Text>
                        <Image
                            style={{ width: 200, height: 230}}
                            source={{uri:'https://s3.amazonaws.com/quipslib/load.gif'}}
                        />
                    </View>
                    )
                    :                       // if have find videogame
                    currentVideogame?.map((item) => {    // deploy Videogame
                        return(                      
                        <View key = {item.id}>   
                            <TouchableOpacity
                                onPress={() => // call Detail screen and send ID
                                navigation.navigate('Detail', {itemId: item.id})}
                            >
                                <Card  
                                    key = {item.id}
                                    id = {item.id} 
                                    image = {item.background_image} 
                                    name ={item.name}  
                                    genres = {item.genres} 
                                    rating = {item.rating}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        ); 
                    })
                    }   
                </View>
               
            </ScrollView> 
            
            { currentVideogame.length === 1  // if have only one card...
                ?
                <View style={{marginBottom: 50}}>
                <Button                         // show ViewAll button
                    title = 'View All'
                    onPress={() => handleViewAll()}>
                </Button>
                </View>
                :
                <View></View>
            }
           
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    ScrollViewStyles: {
        width: '100%',
        backgroundColor: 'white',
    },
});

//make this component available to the app
export default Home;
