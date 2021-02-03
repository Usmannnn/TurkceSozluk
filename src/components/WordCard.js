import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal } from 'react-native'

import { AntDesign } from 'react-native-vector-icons';


const { width, height } = Dimensions.get('screen')

const WordCard = ({ text }) => {

    const [border, setBorder] = useState(false)


    const handlePress = () => {
        setBorder(!border)
        //asağıdan modal açılacak
    }
    
    return (
        <TouchableOpacity
            style={[styles.container, {
                borderWidth: 1,
                borderColor: border ? 'red' : 'transparent'
            }]}
            onLongPress={() => handlePress()}
        >
            <View style={{ flex: 4 }}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 26, marginRight: 10 }}>{text}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <AntDesign name={border ? 'checkcircle' : 'right'} size={20} color={'#E11E3C'} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: 'gray',
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: height * 0.025,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        marginHorizontal: 20
    }
})

export default WordCard