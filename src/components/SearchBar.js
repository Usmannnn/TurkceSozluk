import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Dimensions, TouchableOpacity } from 'react-native'

import { MaterialIcons } from 'react-native-vector-icons';


const { width, height } = Dimensions.get('screen')

const SearchBar = ({icon,placeholder}) => {

    const [text, setText] = useState(null)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <MaterialIcons name={icon} size={30} color={'#758291'} />
            </TouchableOpacity>
            <View style={{flex: 4}}>
                <TextInput 
                    value={text}
                    onChangeText={value => setText(value)}
                    style={styles.input}
                    placeholder={placeholder}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        position: 'relative',
        top: - height * 0.03,
        alignSelf: 'center',
        width: width * 0.9,
        height: height * 0.06,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: height * 0.015,
    },
    input: {
        height: '100%',
        width: '100%',
        paddingVertical: 15,
        color:'#758291'
    }
})

export default SearchBar

