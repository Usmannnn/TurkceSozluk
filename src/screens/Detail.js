import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import IconResponse from '../components/IconResponse'


import SearchBar from '../components/SearchBar'
import WordDetail from '../components/WordDetail'

const Detail = () => {

    const [status, setStatus] = useState(false)

    const handleFavorite = () => {
        setStatus(!status)
    }

    return (
        <View style={styles.container}>
            <SearchBar icon={'search'} placeholder={"Güncel Türkçe Sözlük'te Ara"} />
            <View style={styles.navigation}>

            </View>
            <WordDetail word={'Kalem'} origination={'Arapça kalem'} action={handleFavorite} />
            <IconResponse icon={'bookmark'} text={'Favorilerinize Eklendi'} action={status}/>
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