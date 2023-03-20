//import libraries
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { getVideogameById } from "../../reducers";
import Loading from "../components/Loading";
import Icon from 'react-native-vector-icons/FontAwesome';
import BackButton from '../components/BackButton';

// create a component
const Detail = ( {route, navigation} ) => {

    const [showModal, setShowModal] = useState(false)

    const { itemId } = route.params;
    console.log(itemId)
    const dispatch = useDispatch();     // call Videogame with ID
    
    useEffect(() => { dispatch(getVideogameById(itemId)) }, [itemId]);

    let detail = useSelector((state) => state.VIDEOGAMES.detailVideogame);

    let integerRating = [];

    let decimal = false;

    if(detail.rating > 0){     //if have detail, calculate show rating-start
        integerRating = Array.from(new Array(Math.floor(detail.rating)))

        if(detail.rating > integerRating.length) { decimal = true}

    }

    let i = 0;  // counter key rating's star

    return (
        <View style={styles.container}> 
        <ScrollView showsVerticalScrollIndicator= {false} 
                    style={{ width: '95%'}}> 
            { detail.id === itemId
            ?           // if data is yet!
            <View>
                <Image
                    style={styles.img}
                    source={{ uri: detail.background_image }}
                >
                </Image>
                <Text style={styles.cardTitle}>{detail.name}</Text>
                <TouchableOpacity
                    onPress={() => setShowModal(true)}
                >
                    { detail.description.length < 200 
                    ?
                    <View style={[styles.containerProperties, {backgroundColor: 'lightblue', 
                                    borderBottomWidth: 7, borderRightWidth: 7, borderColor: 'grey',}]}>
                            <Text style={styles.txtDescription}>{detail.description.slice(0, 200)}</Text>
                    </View>
                    :
                    <View style={[styles.containerProperties, {backgroundColor: 'lightblue', 
                                    borderBottomWidth: 7, borderRightWidth: 7, borderColor: 'grey',}]}>
                            <Text style={styles.txtDescription}>{detail.description.slice(0, 200)}...</Text>
                            <Text style={{ fontSize: 20, textAlign: 'justify', color: 'blue', margin: 5,
                                            alignSelf: 'flex-end'}}>
                                Ver más...
                            </Text>
                    </View>
                    }
                </TouchableOpacity>
                                     
                <Modal  animationType="slide" 
                        //transparent={true} 
                        visible={showModal}>
                    <View>
                        <View style={{backgroundColor: 'purple', justifyContent: 'center'}}>
                            <BackButton                 
                                onPress= {() => setShowModal(false)}
                                title= 'Description'
                                color= 'white'
                                icon = 'arrowleft'
                            />
                        </View>
                        <View style={{ backgroundColor: 'lightblue', borderRadius: 10, marginTop: 5, 
                                        marginHorizontal: 15, borderBottomWidth: 5, borderRightWidth: 5, 
                                        borderBottomRightRadius: 10, borderColor: 'grey' }}>
                            {detail.description.length > 1100
                                ?
                                <Text style={{ fontSize: 15, textAlign: 'justify', color: 'black', 
                                            padding: 10, }}>
                                    {detail.description.slice(0, 1050)}...
                                </Text>  
                                :
                                <Text style={{ fontSize: 15, textAlign: 'justify', color: 'black', 
                                    padding: 10, }}>
                                    {detail.description.slice(0, 1110)}
                                </Text>
                            }
                        </View>
                    </View>
                </Modal>

                <View style={{ width: 300, alignSelf: 'center'}}>
                    <View style={styles.containerProperties}>
                        <Text style={[styles.txtProperties, { backgroundColor: 'white', borderRadius: 5,
                                        alignSelf: 'center', paddingHorizontal: 5, borderBottomWidth: 5, 
                                        borderRightWidth: 5, borderBottomRightRadius: 10, borderColor: 'grey' 
                                        }]}> 
                            Released: {detail.released}
                        </Text> 
                    </View>
                    <View  style={styles.containerProperties}>
                        <Text style={[styles.txtProperties, { fontWeight: 'bold', alignSelf: 'center', 
                                        color: 'purple'}]}> 
                            Ranking - {detail.rating}
                        </Text>
 
                        {integerRating != 0 ?
                        <View style={styles.starStyle}>
                            {integerRating?.map(index => {  // integer part
                                return (
                                    <Icon
                                        key={i++} 
                                        style={{ background_image: 'yellow', marginHorizontal: 10, }}
                                        name= 'star'
                                        size= {30}
                                        color= 'purple'
                                    />
                                )
                            })} 

                            {decimal        // decimal part
                                ?
                                <Icon 
                                    style={{ background_image: 'yellow', marginHorizontal: 10, }}
                                    name= 'star-half'
                                    size= {30}
                                    color= 'purple'
                                />
                                :
                                <Text></Text>
                            }
                        </View>
                        : 
                        <View></View>
                        }
                    </View>
                </View>
                <Text style={styles.titlePlatforms}>Platforms</Text>
                <View style={styles.platformsContainer}>
                {detail.platforms?.map(index => {
                        return (
                            <Text style = {styles.platformsStyle} key={index + 'plat'}>{index}</Text>
                        )
                    })}  
                </View>

                <Text style={styles.titleGenres}>Genres</Text>
                <View style={styles.genreContainer}>
                {detail.genres?.map(index => {
                        return (
                            <Text style = {styles.genreStyle} key={index +'gen'}>{index}</Text>
                        )
                    })}  
                </View>
            </View>
            :                   // if is searching data...
            <View>
                <Loading/>
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D0D0D0',
    },
    cardTitle: {
        color: 'purple',
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 10,
        borderBottomWidth: 7,
        borderRightWidth: 7,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 7
    },
    img: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        borderColor: 'white',
        borderRadius: 20,
        borderWidth: 2,

        marginTop: 15,
    },
    containerProperties: {
        flexDirection: 'column',
        width: 320,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        borderRadius: 10,
        marginBottom: 15
    },
    txtDescription: {
        width: 310,
        borderRadius: 10,
        padding: 10,
        textAlign: 'justify',
        backgroundColor: 'lightblue'
    },
    txtProperties: {
        alignSelf: 'flex-start',
        fontSize: 20,
    },
    starStyle: {
        flexDirection: 'row',
        paddingVertical: 15,
        marginTop: 5,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: "center",
        backgroundColor: 'white',
        borderColor: 'grey',
        borderBottomWidth: 5,
        borderRightWidth: 5,
        borderRadius: 15,
    },
    titlePlatforms: {
        alignSelf: 'center',
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',    
    },
    platformsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        backgroundColor: 'white',
        borderWidth: 2,
        borderBottomWidth: 7,
        borderRightWidth: 7,
        borderColor: 'grey',
        borderRadius: 10,
    },
    platformsStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 5,
        borderColor: 'grey',
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderRadius: 10,
        backgroundColor: 'lightblue',
    },
    titleGenres: {
        alignSelf: 'center',
        color: 'purple',
        fontSize: 20,
        fontWeight: 'bold',    
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: 320,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        alignSelf: "center",
        borderWidth: 2,
        borderBottomWidth: 7,
        borderRightWidth: 7,
        borderColor: 'grey',
        borderRadius: 10,
        backgroundColor: 'white',
    },
    genreStyle:{
        alignSelf: 'center',
        fontSize: 20,
        marginHorizontal: 20,
        marginVertical: 10,
        paddingHorizontal: 5,
        borderColor: 'grey',
        borderBottomWidth: 4,
        borderRightWidth: 4,
        borderRadius: 10,
        backgroundColor: 'lightblue',
    },
   
});

//make this component available to the app
export default Detail;
