//import libraries
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { getVideogameById } from "../../reducers";

// create a component
const Detail = ( {route, navigation} ) => {

    const { itemId } = route.params;
    const dispatch = useDispatch();     // call Videogame with ID
    
    useEffect(() => { dispatch(getVideogameById(itemId)) }, [dispatch]);

    let detail = useSelector((state) => state.VIDEOGAMES.detailVideogame);


    return (
        <View style={styles.container}> 
        <ScrollView style={{ width: '95%'}}> 
            { detail.id === itemId
            ?           // if data is yet!
            <View>
                <Image
                    style={styles.img}
                    source={{ uri: detail.background_image }}
                >
                </Image>
                <Text style={styles.cardTitle}>{detail.name}</Text>
                <View style={styles.containerProperties}>
                    <Text style={styles.txtDescription}>{detail.description}</Text>
                </View>
                <View style={{ width: 300}}>
                    <View style={styles.containerProperties}>
                        <Text style={styles.txtProperties}> Released: {detail.released}</Text>
                        <Text style={styles.txtProperties}> Ranking: {detail.rating}</Text>
                    </View>
                </View>
                <Text style={styles.titlePlatforms}>Platforms</Text>
                <View style={styles.platformsContainer}>
                {detail.platforms?.map(index => {
                        return (
                            <Text style = {styles.platformsStyle} key={index}>{index}</Text>
                        )
                    })}  
                </View>

                <Text style={styles.titleGenres}>Genres</Text>
                <View style={styles.genreContainer}>
                {detail.genres?.map(index => {
                        return (
                            <Text style = {styles.genreStyle} key={index}>{index}</Text>
                        )
                    })}  
                </View>
            </View>
            :                   // if is searching data...
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 20, fontWeight: '200'}}>
                    Searching data, a moment please...
                </Text>
                <Image
                    style={{ width: 200, height: 230}}
                    source={{uri:'https://s3.amazonaws.com/quipslib/load.gif'}}
                />
            </View>
            }
        </ScrollView> 
        </View> 
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    cardTitle: {
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: '400',
        marginBottom: 10,
    },
    img: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        marginTop: 15,
    },
    containerProperties: {
        flexDirection: 'column',
        justifyContent: 'center',
        width: 320,
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 5,
    },
    txtDescription: {
        width: 310,
        margin: 5,
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 10,
        padding: 10,
        textAlign: 'justify'
    },
    txtProperties: {
        alignSelf: 'flex-start',
        fontSize: 20,
    },
    titleGenres: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '100',    
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'lightblue',
        borderRadius: 5
    },
    genreStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 5,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    titlePlatforms: {
        alignSelf: 'center',
        fontSize: 25,
        fontWeight: '100',    
    },
    platformsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: 'lightgreen',
        borderRadius: 5
    },
    platformsStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 5,
        borderColor: 'green',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white',
    }
});

//make this component available to the app
export default Detail;
