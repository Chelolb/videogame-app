//import libraries
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { delPlaGen, createVideogame } from "../../reducers";
import Button from '../components/Button';
import { ScrollView } from 'react-native-gesture-handler';

// create a component

const Create = ({ route }) => {

    const navigation = useNavigation();

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [background_image, setBackground_image] = useState('');
    const [description, setDescription] = useState('Insert');
    const [released, setReleased] = useState('');
    const [rating, setRating] = useState('');
    const [platforms, setPlatforms] = useState([]);
    const [genres, setGenres] = useState([]);
  

    //useEffect(() => { clearInputs() }, []);

    function clearInputs(){
        setName('');
        setBackground_image('');
        setDescription('');
        setReleased('');
        setRating(0);
        setPlatforms([]);
        setGenres([]);
        valueP = "";
        valueG = "";
    };
   
    let valueP = "";

    let valor = "";

    valor = useSelector((state) => state.VIDEOGAMES.newVideogamePlatforms);

    valor.length
    ? valueP = valor.split(', ') 
    : valueP = "";
    
    let valueG = "";

    let valor1 = "";

    valor1 = useSelector((state) => state.VIDEOGAMES.newVideogameGenres);

    valor1.length
    ? valueG = valor1.split(', ')
    : valueG = "";

    let actualReleased = useSelector((state) => state.VIDEOGAMES.newVideogameReleased);

    if (actualReleased.length && actualReleased !== released) {setReleased(actualReleased)}

    
    let actualRating = useSelector((state) => state.VIDEOGAMES.newVideogameRating);

    if (actualRating && actualRating !== rating) {setRating(actualRating)}

    //console.log(`store: ${actualRating} -->${actualRating.length} rating: ${rating}`)

    async function submitForm() {


        if (!name) {
            return alert(`Name's field is empty, complete please`)     // if field is empty...
        };

        if (!description) {
            return alert(`Description's field is empty, complete please`)     // if field is empty...
        };

        if (!released) {
            return alert(`Released's field is empty, complete please`)     // if field is empty...
        };

        if (valueP.length < 1) {
        return alert('Indicate at least one Platform')     // if platforms's fiel is empty...
        };

        if (valueG.length < 1) {
            return alert('Indicate at least one Genre')     // if genres's fiel is empty...
        };

        if (!rating || isNaN(rating)) {
            return alert(`Rating's data value isn't number`)     // if rating fields is not number...
        };

        if (!background_image) {   // if not image indicate
            return alert(`Indicate an URL image's field`)
        };

        const newPokemon = {
            name, 
            background_image, 
            description, 
            released, 
            rating, 
            platforms: valueP.join(', '),
            genres: valueG,
        };

        //setModalVisible(true)
        //await dispatch(createPokemon(newPokemon));
        //setModalVisible(false)
        clearInputs();
        //dispatch(delPlaGen());

            console.log(JSON.stringify(newPokemon))
        alert('The videogame created successfully');
        
        navigation.navigate('Principal')
    }
  
  
    return (
        <View style={styles.container}>
            <ScrollView 
                style={{ width: 300 }}
                showsVerticalScrollIndicator= {false} 
            >
                <View style={{ flex: 4, justifyContent: 'center'}}>
                    <Text style={{ fontSize: 20, justifyContent: 'center', alignItems: 'center', 
                                    alignSelf: 'center', marginTop: 15}}>
                        Insert a new videogame!!...
                    </Text>
                </View>
                <View style={styles.containerHeader}>
                    <Text style={[styles.txtStyle, { marginLeft: 20 }]}>Name:</Text>
                    <TextInput 
                        style={styles.inputTxt} 
                        value={name}
                        placeholder= 'Insert name'
                        onChangeText={setName} />
                    <Text style={[styles.txtStyle, { marginLeft: 20 }]}>Image:</Text>
                    <TextInput
                        style={styles.inputTxt}
                        value={background_image}
                        placeholder= 'Insert image'
                        onChangeText={setBackground_image} />
                </View>
                <View style={styles.containerDescription}>
                    <Text style={[styles.txtStyle, { marginLeft: 20 }]}>Description:</Text>
                    <TextInput 
                        style={styles.inputDescription}
                        textAlignVertical= 'top'
                        multiline
                        numberOfLines={10} 
                        value={description}
                        placeholder= 'Insert'
                        onChangeText={setDescription} />
                </View>
                <View style={styles.viewSelect}>
                    <View style={{paddingHorizontal: 50, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Select Platforms'
                            onPress={() => navigation.navigate('Select Platforms', {platformsSelect: valor})}
                        >
                        </Button>
                    </View>
                    <View style={valueP.length ? styles.containerValue : styles.containerValue0}>
                    { valueP
                        ? valueP.map((c, index) => {         //  show selected platform
                            return (
                                <View style={styles.valueLabel} key={index} >
                                    <Text style={styles.txtSelect}>{c}</Text>
                                </View>
                            )
                        })
                        : (null)
                    }
                    </View> 
                </View>  
                <View style={[styles.viewSelect, { marginTop: 10}]}>
                    <View style={{paddingHorizontal: 50, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Select Released'
                            onPress={() => navigation.navigate('Select Released', {releasedSelect: released.split('/').join('-')})}
                        >
                        </Button>
                    </View>
                    <View style={released ? styles.containerValue : styles.containerValue0}>
                    {released ?
                        <View style={styles.valueLabel}>
                            <Text style={[styles.txtSelect, { alignSelf: 'center', borderRadius: 5 }]}>{released}</Text>
                        </View>
                        : (null)
                    }
                    </View> 
                </View>  
                <View style={[styles.viewSelect, { marginVertical: 10}]}>
                    <View style={{paddingHorizontal: 50, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Select Rating'
                            onPress={() => navigation.navigate('Select Rating', {ratingSelect: rating})}
                        >
                        </Button>
                    </View>
                    <View style={rating > 0 ? styles.containerValue : styles.containerValue0}>
                    {rating > 0 ?
                        <View style={styles.valueLabel}>
                            <Text style={[styles.txtSelect, { alignSelf: 'center', borderRadius: 5 }]}>{rating}</Text>
                        </View>
                        : (null)
                        }
                    </View> 
                </View>  
                <View style={styles.viewSelect}>
                    <View style={{paddingHorizontal: 50, marginVertical: 10}}>
                        <Button
                            style={{with: 70, marginVertical: 15}}
                            title = 'Select Genres'
                            onPress={() => navigation.navigate('Select Genres', {genresSelect: valor1})}>
                        </Button>
                    </View>

                    <View style={valueG.length ? styles.containerValue : styles.containerValue0}>
                    { valueG
                        ? valueG.map((c, index) => {         //  show selected type
                            return (
                                <View style={styles.valueLabel} key={index} >
                                    <Text style={styles.txtSelect}>{c}</Text>
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
                        title = 'Create'
                        onPress={() => submitForm()}>
                    </Button>
                </View>
            </ScrollView>
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
      containerHeader: {
          width: 300,
          borderRightWidth: 5,
          borderBottomWidth: 5,
          borderColor: 'rgb(150, 150, 150)',
          borderWidth: 2,
          borderRadius: 30,
          backgroundColor: 'white',
          marginVertical: 15,
      },
      inputTxt: { 
          backgroundColor: '#fff', 
          marginHorizontal: 10, 
          marginBottom: 10,
          borderWidth: 1,
          borderColor: 'purple',
          borderRadius: 20, 
          paddingHorizontal: 5,
          paddingLeft: 10
      },
      containerDescription: {
          width: 300, 
          borderRightWidth: 5,
          borderBottomWidth: 5,
          borderColor: 'rgb(150, 150, 150)',
          borderWidth: 2,
          borderRadius: 30, 
          marginBottom: 15,  
          backgroundColor: 'white'
      },
      inputDescription: { 
        backgroundColor: '#fff', 
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 20, 
        margin: 10, 
        paddingHorizontal: 10,
        paddingVertical: 5
      },
      viewSelect: {
        width: 300, 
        alignSelf: 'center',
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30, 
        backgroundColor: 'white'
      },
      txtSelect: { 
        backgroundColor: 'lightblue', 
        marginVertical: 2, 
        paddingHorizontal: 10 
      },
      containerItems: {
          width:300,
          height:35,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          backgroundColor: 'transparent',
          marginVertical: 10,
      },
      containerSubItems0: {
          flex: 3,
          flexDirection: 'row',
          width: 125,
          borderRightWidth: 5,
          borderBottomWidth: 5,
          borderColor: 'rgb(150, 150, 150)',
          borderWidth: 2,
          borderRadius: 30, 
          backgroundColor: 'white',
      },
      containerSubItems1: {
        flex: 2,
        flexDirection: 'row',
        width: 125,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        borderWidth: 2,
        borderRadius: 30, 
        marginLeft: 10,
        backgroundColor: 'white',
    },
      txtStyle: {
          marginHorizontal: 5,
          marginVertical: 5,
      },
      input: {
          alignContent: 'center',
          alignContent: 'center',
          justifyContent: 'center',
          width: 50,
          marginVertical: 5,
          borderColor: 'purple',
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 5,
          backgroundColor: '#fff',
      },
      input1: { 
        width: 90,
        alignContent: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginVertical: 5,
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 5,
        backgroundColor: '#fff',
    },
      containerValue: {
          flexDirection: 'column',
          marginHorizontal: 55,
          marginTop: 10,
          marginBottom: 20,
          padding: 10,
          borderWidth: 1, 
          borderRadius: 25,
          borderColor: 'purple',
      }, 
      containerValue0: {
          borderWidth: 0, 
      },
      valueLabel: {

      }
  });

//make this component available to the app
export default Create;
