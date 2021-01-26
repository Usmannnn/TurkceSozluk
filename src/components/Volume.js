import React from 'react'
import { StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

import { Feather, FontAwesome } from 'react-native-vector-icons';

const { width } = Dimensions.get('screen')

const Volume = () => {
    return (
        <TouchableOpacity style={styles.icons}>
            <Feather name={'volume-2'} size={25} color={'black'} />
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    icons: {
        backgroundColor: 'white',
        borderRadius: width * 0.26,
        height: width * 0.13,
        width: width * 0.13,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default Volume