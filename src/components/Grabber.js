import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Grabber = ({color}) => {
    return (
        <TouchableOpacity
            // onPress={() => action(false)}
            style={{
                marginVertical: 15,
                alignSelf: 'center',
                width: '25%',
                height: 7,
                borderRadius: 4,
                backgroundColor: color
            }}
        />
    )
}

export default Grabber

const styles = StyleSheet.create({})
