import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight} from 'react-native';

type props = {
    onAddItem: (item) => void;
}

export default function Header({ onAddItem }: props){
    const [value, setValue] = useState('');
    function addItem(){
        onAddItem(value);
        setValue('')
    }
    return(
        <View style={styles.container}>
            <TextInput
                onChangeText={setValue}
                style={styles.input}
                onSubmitEditing={addItem}
                value={value}
                autoFocus
                onBlur={e => e.target.focus()}
            />
            <TouchableHighlight onPress={addItem}>
                <View style={styles.button}>
                    <Text style={styles.textButton}>+</Text>
                </View>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginVertical: 24,
        marginRight: 8,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        borderColor: '#efeff0',
        backgroundColor: '#efeff0',
        width: 250,
    },
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    button:{
        width: 60,
        height: 40,
        backgroundColor: '#68bd44',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        fontWeight: 'bold',
    }
});