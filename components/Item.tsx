import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import { useTasksStore } from '../App';

type props = {
    item: {text: string, unDone: boolean, created: string};
    buttonDone?: boolean;
}

export default function Item({ item, buttonDone }: props){
    const changeTaskState = useTasksStore((state) => state.changeTaskState);

    return(
        <View style={styles.content}>
            <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
                {buttonDone && (
                    <TouchableHighlight onPress={() => changeTaskState(item.text)}>
                        <View style={styles.button}>
                            <Text style={styles.textButton}>DONE</Text>
                        </View>
                    </TouchableHighlight>
                )}
            </View>
            <Text style={styles.textDate}>Criado em: {item.created}</Text>
            <View style={styles.separator} />
        </View>
    )
}

const styles = StyleSheet.create({
    content:{
        paddingHorizontal: 20,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    text:{
        color: '#605d59',
    },
    textDate:{
        color: '#b2b2b2'
    },
    textButton:{
        color: 'white',
        fontWeight: 'bold',
    },
    item: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    separator:{
        borderBottomColor: '#d9dadc',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 10,
    },
    button:{
        margin: 8,
        width: 60,
        height: 40,
        backgroundColor: '#c27c44',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        justifyContent: 'center',
        alignItems: 'center',
    }
})