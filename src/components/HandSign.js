import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'

import { FontAwesome } from 'react-native-vector-icons';

const { width, height } = Dimensions.get('screen')

const HandSign = () => {
    return (
        <TouchableOpacity style={styles.languange}>
            <FontAwesome name="hand-o-up" size={25} color="black" />
            <Text style={{ fontWeight: '700', fontSize: 14, lineHeight: 20 }}>Türk İşaret Dili</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    languange: {
        backgroundColor: 'white',
        borderRadius: 999,
        height: width * 0.13,
        width: width * 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
})

export default HandSign