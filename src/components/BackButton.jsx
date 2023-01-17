import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome';

export default function BackButton(props) {
  const { onPress, title, color, icon } = props;
  return (
    <Pressable 
        style={styles.button} 
        onPress={onPress}>
        <Ionicons 
            name= {icon}
            size= {20}
            color= 'black'   
        />
        <Text style={ {fontSize: 20, 
           // lineHeight: 21, fontWeight: 'bold', 
            letterSpacing: 0.25, color: color, marginLeft: 15}}>
            {title}
        </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        //marginBottom: 15,
        paddingTop: 15,
        paddingLeft: 15,
    },
});