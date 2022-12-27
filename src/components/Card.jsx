//import libraries
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';

// create a component
const Card = ({id, image, name, rating, genres }) => {
    return (
        <View style={styles.container}>    
            <Image
                style={styles.img}
                PlaceholderContent={<ActivityIndicator color="#fff"/>}
                source={{ uri: image }}
            >
            </Image>
            <Text style={styles.cardTitle}>{ name }</Text>
            <Text style={{alignSelf: 'center'}}>{`Rating: ${rating}`}</Text> 
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
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: 'rgba(255, 255, 255, 0.6)',
        //backgroundColor: '#41DB00',
        backgroundColor: '#FFEB73',
        width: 300,
        minHeight: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderRightWidth: 7,
        borderBottomWidth: 7,
        borderColor: 'rgb(235, 235, 235)',
        margin: 20,
    },
    img: {
        width: 280,
        height: 200,
        borderRadius: 10,
        margin: 5,
        resizeMode: 'cover',
        resizeMethod: 'resize',
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        flexWrap: 'wrap',
        padding: 5,
        color: 'purple'
    },
    genreContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 5,
        alignSelf: 'center',
    },
    genreStyle:{
    alignSelf: 'center',
    fontSize: 15,
    fontStyle: 'bold',
    marginHorizontal: 10,
    paddingHorizontal: 5,
    color: 'purple',
    },
});

//make this component available to the app
export default Card;
