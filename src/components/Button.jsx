import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Button(props) {
  const { onPress, title, enable, color } = props;
  return (
    <Pressable style={[styles.button, {backgroundColor: enable ? color : 'grey'}]} 
               onPress={ enable ? onPress : null }>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 10,
    marginRight: 10,
    marginLeft: 5,
    borderRadius: 30,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

Button.defaultProps = {
  enable: true,
  color: 'purple'

};