import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import EmptyScreen from '../components/EmptyScreen';
import Header from '../components/Header';
import WordCard from '../components/WordCard';

const History = () => {

    const [data, setData] = useState([])
    const [icon, setIcon] = useState('right')


    const emptyScreen = () => {
        return (
            //  <View style={{ margin: 20 }}>
            //     <Header size={25} left={'left'} title={'Geçmiş'} right={'dots-three-horizontal'} />
            // </View>
            <EmptyScreen icon={'history'} message={'Henüz geçmiş yok.'} />
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