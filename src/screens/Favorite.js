import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { MaterialIcons } from 'react-native-vector-icons';
import Header from '../components/Header';

const History = () => {
    return (
        <>
            <View>
                <Header left={'left'} title={'Favoriler'} right={'dots-three-horizontal'} />
            </View>
            <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name={'bookmark-outline'} size={50} color={'#758291'} />
                <Text style={{ marginTop: 15, fontWeight: '600', fontSize: 18, lineHeight: 20, color: '#758291' }}>Henüz favoriniz yok</Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({})

export default History