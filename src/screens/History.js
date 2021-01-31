import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialIcons } from 'react-native-vector-icons';
import Header from '../components/Header';
import WordCard from '../components/WordCard';

const History = () => {

    const [data, setData] = useState([0])
    const [icon, setIcon] = useState('right')


    const emptyScreen = () => {
        return (
            <>
                <View style={{margin: 20}}>
                    <Header size={25} left={'left'} title={'Geçmiş'} right={'dots-three-horizontal'} />
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
                <View style={{margin: 20}}>
                    <Header size={25} left={'left'} title={'Geçmiş'} right={'dots-three-horizontal'} />
                </View>
                <View style={styles.contentContainer}>
                    <WordCard text={'işaskfsşaikfişk'} icon={icon}/>
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
    }
})

export default History