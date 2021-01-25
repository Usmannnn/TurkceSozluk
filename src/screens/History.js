import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { MaterialIcons } from 'react-native-vector-icons';
import Header from '../components/Header';


const History = () => {
    return (
        <>
            <View>
                <Header left={'left'} title={'History'} right={'dots-three-horizontal'} />
            </View>
            <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name={'history'} size={45} color={'#758291'} />
                <Text style={{ fontWeight: '600', fontSize: 16, lineHeight: 20, color: '#758291' }}>Henüz geçmiş yok</Text>
            </View>

        </>
    )
}


const styles = StyleSheet.create({
})

export default History