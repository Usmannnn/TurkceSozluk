import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconResponse from '../components/IconResponse'
import NavigationBar from '../components/NavigationBar'


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
            <View style={{ marginHorizontal: 20, marginTop: -20 }}>
                <NavigationBar />
            </View>            
            <WordDetail word={'Kalem'} origination={'Arapça kalem'} action={() => handleFavorite()} />
            <IconResponse icon={'bookmark'} text={'Favorilerinize Eklendi'} action={status} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        marginTop: 30
    },
})

export default Detail