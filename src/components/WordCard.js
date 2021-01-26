import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'

import { AntDesign } from 'react-native-vector-icons';


const { width, height } = Dimensions.get('screen')

const WordCard = ({ text }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={{flex: 4 }}>
                <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 26, marginRight: 10 }}>{'texttexttextexttexttextexttexttextexttexttextexttexttextexttexttextexttexttex ttextt exttexttextte'}</Text>
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
                <AntDesign name={'right'} size={20} color={'#E11E3C'} />
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: 'gray',
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: height * 0.025,
        paddingHorizontal: 15,
        backgroundColor: 'white'
    }
})

export default WordCard