import React from 'react';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Header from '../components/Header';
import ListItems from '../components/ListItems';
import { useTasksStore } from '../App';


export default function MainPage() {

    const tasksList = useTasksStore((state) => state.tasks);
    const increaseTasks = useTasksStore((state) => state.increaseTasks);

    async function recordItems(itemId, listToRecord) {
        try {
            const jsonValue = JSON.stringify(listToRecord);
            await AsyncStorage.setItem(itemId, jsonValue);
          } catch (e) {
            // saving error
          }
    }

    function addItemList(item) {
        const newTask = {text: item, unDone: true, created: new Date().toLocaleString()};
        increaseTasks(newTask);
        recordItems('todo-list', [...tasksList, newTask]);
    }

    return(
        <View style={styles.container}>
            <Header
                onAddItem={addItemList}
            />
            <ListItems items={tasksList} showUnDone buttonDone />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
    }
})