import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';


import { AntDesign, Entypo } from 'react-native-vector-icons';


const Header = ({ left, right, title, size }) => {

    const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
            >
                <AntDesign name={left} size={size} color={'black'} />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity
                onPress={() => alert('asd')}
            >
                <Entypo name={right} size={size} color={'black'} />
            </TouchableOpacity>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal: 20,
        // marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 22,
        textAlign: 'center'
    }
})


export default Header