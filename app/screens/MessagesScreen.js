import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';


const messages =[
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/benj.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/benj.jpg')
    },
]

function MessagesScreen(props) {
    return (
        <Screen >
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => <ListItem
                                        title={item.title}
                                        subTitle={item.subTitile}
                                        image={item.image}
                                        />}
                ItemSeparatorComponent={ ListItemSeparator }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    
})


export default MessagesScreen;