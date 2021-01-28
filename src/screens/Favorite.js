import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';

import { MaterialIcons } from 'react-native-vector-icons';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
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
    const [icon, setIcon] = useState(false)

    //data redux tan gelince tıklanan item datanın içindeki rengi değiştirecek
    const onLongPress = () => {
            // setBorderColor(!borderColor)
            // setIcon(!icon)
    }

    const emptyScreen = () => {
        return (
            <>
                <View>
                    <Header left={'left'} title={'Favoriler'} right={'dots-three-horizontal'} />
                </View>
                <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name={'bookmark-outline'} size={50} color={'#758291'} />
                    <Text style={{ marginTop: 15, fontWeight: '600', fontSize: 18, lineHeight: 20, color: '#758291' }}>Henüz geçmiş yok</Text>
                </View>
            </>
        )
    }

    const renderCard = ({item, index}) => {
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
                <View>
                    <Header left={'left'} title={'Favoriler'} right={'dots-three-horizontal'} />
                    <NavigationBar />
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
        data.length == 0 ? emptyScreen() : historyItem()
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        marginHorizontal: 20
    }
})

export default History