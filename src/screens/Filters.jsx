//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Filters = () => {
    
    // useEffect(() => { 
    //     navigation.dispatch(DrawerActions.openDrawer())
    // }, []);

    return (
        <View style={styles.container}>

            <Text style={{fontSize: 30, fontWeight: '200'}}>Select Filter Wished...</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Filters;
