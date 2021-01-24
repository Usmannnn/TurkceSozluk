import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import SearchBar from '../components/SearchBar'

const Detail = () => {
    return (
        <View style={styles.container}>
            <SearchBar icon={'search'} placeholder={"Güncel Türkçe Sözlük'te Ara"} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        ...StyleSheet.absoluteFillObject,
        marginHorizontal: 20,
        marginTop: 30
    }
})

export default Detail