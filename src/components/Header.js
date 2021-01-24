import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';


import { AntDesign, Entypo } from 'react-native-vector-icons';


const Header = ({ left, right, title }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => alert('asd')}
            >
                <AntDesign name={left} size={25} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                onPress={() => alert('asd')}
            >
                <Entypo name={right} size={25} color={'black'} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        height: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center'
    }
})


export default Header