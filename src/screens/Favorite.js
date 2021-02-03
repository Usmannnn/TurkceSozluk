import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { MaterialIcons } from 'react-native-vector-icons';
import EmptyScreen from '../components/EmptyScreen';

import Header from '../components/Header';
import WordCard from '../components/WordCard';

const History = () => {

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
    ])

    const [borderColor, setBorderColor] = useState(false)
    const [icon, setIcon] = useState('right')

    //data redux tan gelince tıklanan item datanın içindeki rengi değiştirecek
    const onLongPress = () => {
        // setBorderColor(!borderColor)
        // setIcon(!icon)
    }

    const emptyScreen = () => {
        return (
                // <View style={{margin: 20}}>
                //     <Header size={25} left={'left'} title={'Favoriler'} right={'dots-three-horizontal'} />
                // </View>
                <EmptyScreen icon={'bookmark-outline'} message={'Henüz favori yok.'} />
        )
    }

    const renderCard = ({ item, index }) => {
        return (
            <TouchableOpacity key={index}
                onPress={() => onLongPress()}
            >
                <WordCard text={item.text} borderColor={borderColor} icon={icon} />
            </TouchableOpacity>
        )
    }

    const historyItem = () => {
        return (
            <>
                <View style={{ margin: 20 }}>
                    <Header size={25} left={'left'} title={'Favoriler'} right={'dots-three-horizontal'} />
                </View>
                <FlatList
                    data={data}
                    renderItem={renderCard}
                    style={styles.contentContainer}
                    keyExtractor={(item, index) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </>
        )
    }

    return (
        data.length !== 0 ? emptyScreen() : historyItem()
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    }
})

export default History