import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialIcons } from 'react-native-vector-icons';
import Header from '../components/Header';
import NavigationBar from '../components/NavigationBar';
import WordCard from '../components/WordCard';

const History = () => {

    const [data, setData] = useState([0])

    const emptyScreen = () => {
        return (
            <>
                <View>
                    <Header left={'left'} title={'Geçmiş'} right={'dots-three-horizontal'} />
                </View>
                <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name={'history'} size={50} color={'#758291'} />
                    <Text style={{ marginTop: 15, fontWeight: '600', fontSize: 18, lineHeight: 20, color: '#758291' }}>Henüz geçmiş yok</Text>
                </View>
            </>
        )
    }

    const historyItem = () => {
        return (
            <>
                <View>
                    <Header left={'left'} title={'Geçmiş'} right={'dots-three-horizontal'} />
                    <NavigationBar />
                </View>
                <View style={styles.contentContainer}>
                    <WordCard />
                    <WordCard />
                </View>
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