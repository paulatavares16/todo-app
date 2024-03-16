import React from 'react';
import { View, StyleSheet } from 'react-native';


import ListItems from '../components/ListItems';
import { useTasksStore } from '../App';


export default function HistoryPage() {
    const tasksList = useTasksStore((state) => state.tasks);

    return (
        <View style={styles.container}>
            <ListItems items={tasksList} showUnDone={false} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
    }
})