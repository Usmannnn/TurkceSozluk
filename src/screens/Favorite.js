import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { MaterialIcons } from 'react-native-vector-icons';
import EmptyScreen from '../components/EmptyScreen';

import Header from '../components/Header';
import WordCard from '../components/WordCard';

const Favorite = () => {

    const [data, setData] = useState([
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
    ])

    return (
        <View style={styles.contentContainer}>
            <View style={{ margin: 20 }}>
                <Header size={25} left={'left'} title={'Favoriler'} right={'dots-three-horizontal'} />
            </View>
            {
                data.length == 0 ?
                    <EmptyScreen icon={'bookmark-outline'} message={'Henüz favori yok.'} />
                    :
                    <FlatList
                        data={data}
                        renderItem={({item, index}) =>  <WordCard text={item.text} />}
                        style={styles.contentContainer}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
            }
        </View>


    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    }
})

export default Favorite