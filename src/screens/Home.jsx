//import libraries
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, StyleSheet, ScrollView, FlatList, SafeAreaView, 
        TouchableOpacity, StatusBar, Dimensions } from 'react-native';
import { getAllVideogames } from "../../reducers";
//import Card from '../components/Card';
import CardMini from '../components/CardMini';
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import Loading from "../components/Loading";

const { width } = Dimensions.get('window');

// create a component
const Home = ( {navigation} ) => {

    const dispatch = useDispatch();  

    useEffect(() => { dispatch(getAllVideogames()) }, [dispatch]);    // call all videogames endpoint

    
    let currentVideogame = useSelector((state) => state.VIDEOGAMES.allVideogameFiltered)
    //console.log(currentVideogame.length)

    function handleViewAll(e){       // ViewAll button function                       
        dispatch(getAllVideogames())   // call endpoint AllView;
    }

    const renderItem =({ item, index }) => {
        return(
            <View>
                <TouchableOpacity
                    onPress={() => // call Detail screen and send ID
                    navigation.navigate('Detail', {itemId: item.id})}
                >
                    <CardMini
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
    }

    return (
        <SafeAreaView style={styles.container}>
        <StatusBar barStyle = "light-content" hidden = {false} backgroundColor = "#770060" translucent = {true}/>
            <View style={{ justifyContent: 'center', alignItems: 'flex-start'}}>
                <View style={{ height: 50, width: width, backgroundColor: 'purple', marginTop: 24, 
                                justifyContent: 'center'}}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                        VideoGame`s Galery
                    </Text>
                </View>
                <View style={{ alignSelf: 'center'}}>
                    <SearchBar/>
                </View>
            </View>
            {!currentVideogame.length ?    //  if array have not elements
                
                (currentVideogame.msg        
                    ?                           //  if is error menssage                                 
                    <View>
                        <Text>{currentVideogame.msg}</Text>
                    </View>  
                    :                       //  if is searching...  
                    <View style={{ height: 300}}>
                        <Loading/>
                    </View>
                    )
                    :                       // if have find videogame

                    <SafeAreaView style={styles.container}>
                        <FlatList
                            data={currentVideogame}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                        />
                    </SafeAreaView>
            } 


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
        justifyContent: 'flex-start' ,
        alignItems: 'center',
        backgroundColor: '#D0D0D0',
    },
    ScrollViewStyles: {
        width: '100%',
        backgroundColor: 'transparent',
    },
});

//make this component available to the app
export default Home;
