import React, { useState } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const { width, height } = Dimensions.get('screen')

const SpecialLetter = () => {

    const [letter, setLetter] = useState([
        'ç','ğ','ı','ö','ş','ü','â','î','û'
    ])

    return (
        <View style={styles.container}>
            {letter.map((item, index) => {
                return (
                    <TouchableOpacity key={index} style={{ padding: 15}}>
                        <Text style={styles.letters}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        width: width,
        height: height * 0.06,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20
    },
    letters: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 16,
        textAlign: 'center'
    }
})


export default SpecialLetter