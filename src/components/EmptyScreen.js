import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header from './Header'

import { MaterialIcons } from 'react-native-vector-icons';

const EmptyScreen = ({icon, message}) => {
    return (
        <>
            <View style={{ ...StyleSheet.absoluteFill, justifyContent: 'center', alignItems: 'center' }}>
                <MaterialIcons name={icon} size={50} color={'#758291'} />
                <Text style={{ marginTop: 15, fontWeight: '600', fontSize: 18, lineHeight: 20, color: '#758291' }}>{message}</Text>
            </View>
        </>
    )
}


const styles = StyleSheet.create({})

export default EmptyScreen