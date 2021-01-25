import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'


import SearchBar from '../components/SearchBar'
import WordDetail from '../components/WordDetail'

const Detail = () => {
    return (
        <View style={styles.container}>
            <SearchBar icon={'search'} placeholder={"Güncel Türkçe Sözlük'te Ara"} />
            <View style={styles.navigation}>

            </View>
            <WordDetail word={'Kalem'} origination={'Arapça kalem'} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        marginHorizontal: 20,
        marginTop: 30
    },
    navigation: {
        backgroundColor: 'gray',
        height: 50,
        marginBottom: 30,
    }
})

export default Detail