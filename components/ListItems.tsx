import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Item from './Item';

type props = {
    items: any[];
    buttonDone?: boolean;
    showUnDone?: boolean;
}

export default function ListItems({ items, buttonDone, showUnDone }: props){
    
    return(
        <View style={styles.container}>
            <FlatList 
                data={items}
                renderItem={({ item }) => (item.unDone === showUnDone) && <Item item={item} buttonDone={buttonDone} />}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignSelf: 'stretch',
        justifyContent: 'center',
    }
})