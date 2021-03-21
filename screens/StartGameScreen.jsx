import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = () => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new game</Text>
            <Card>
                <Text>Select a number</Text>
                <Input keyboardType='number-pad' blurOnSubmit={true} maxLength='2' autoFocus style={styles.input}/>
                <View style={styles.buttonContainer}>
                    <Button title='Reset' color='#ff627b'></Button>
                    <Button title='Confirm' color='#7eed8a'></Button>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    input: {
        width: 100,
        textAlign: 'center',
    },
});

export default StartGameScreen;