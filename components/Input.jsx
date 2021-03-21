import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return(
        <TextInput {...props} style={{...styles.text, ...props.style}}></TextInput>
    );
};


const styles = StyleSheet.create({
    text: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
    },
});


export default Input;