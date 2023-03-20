//import libraries
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

// create a component
const CardMini = ({id, image, name, rating, genres }) => {

    var valor = 0;
    
    if (rating !== Math.floor(rating)) { // show integer and two decimal
        valor = rating }
    else{
        valor = `${rating}.00` 
    }

    return (
        <View style={styles.container}>
                <Image
                    style={styles.img}
                    PlaceholderContent={<ActivityIndicator color="#fff"/>}
                    source={{ uri: image }}
                >
                </Image>
                <Ionicons 
                    style= {{ position: 'absolute', top: 82, left: 98}}
                    name= 'star'
                    size= {45}
                    color= 'purple'
                />
            <Text style={{ borderRadius: 50, fontSize: 10, color: 'white', fontWeight: 'bold',  
                    paddingHorizontal: 2, alignSelf: 'center', 
                    position: 'absolute', top: 97, left: 107 }}>
                    {valor}
                </Text>
                <Text style={styles.cardTitle}>{ name }</Text>
            <View style={styles.genreContainer}>
                {genres?.map(index => {
                        return (
                            <Text style = {styles.genreStyle} key={index}>{index}</Text>
                        )
                    })}            
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start' ,
        alignItems: 'center' ,
        //backgroundColor: '#FFEB73',
        backgroundColor: 'white',
        width: 170,
        height:220,
        borderRadius: 20,
        borderWidth: 1,
        borderRightWidth: 5,
        borderBottomWidth: 5,
        borderColor: 'rgb(150, 150, 150)',
        margin: 5,
    },
    firstContainer: {
        flex: 1,
        justifyContent: 'center' ,
        alignItems: 'center' ,
        backgroundColor: 'red', 
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        marginTop: 5,
        resizeMode: 'cover',
        resizeMethod: 'resize',
    },
    cardTitle: {
        textAlign: 'center' ,
        fontSize: 15,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        paddingHorizontal: 5,
        color: 'purple'
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        flexWrap: 'wrap',
        margintop: 5,
        alignSelf: 'center',
    },
    genreStyle:{
        alignSelf: 'center',
        fontSize: 12,
        fontStyle: 'bold',
        //marginHorizontal: 10,
        paddingHorizontal: 5,
        color: 'purple',
    },
});

//make this component available to the app
export default CardMini;
