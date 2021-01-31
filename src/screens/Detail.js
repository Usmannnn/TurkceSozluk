import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import IconResponse from '../components/IconResponse'


import SearchBar from '../components/SearchBar'
import WordDetail from '../components/WordDetail'

const Detail = () => {

    const [status, setStatus] = useState(false)
    const [isFocusBar, setIsFocusBar] = useState(false)
    const [searchedValue, setSearchedValue] = useState(null)

    const handleFavorite = () => {
        setStatus(!status)
    }

    return (
        <View style={styles.container}>
            <SearchBar
                icon={'search'}
                placeholder={"Güncel Türkçe Sözlük'te Ara"}
                onFocusBar={focus => setIsFocusBar(focus)}
                onChangeValue={text => setSearchedValue(text)}
                value={searchedValue}
            />
            {
                !isFocusBar ?
                    <>
                        <WordDetail word={'Kalem'} origination={'Arapça kalem'} action={() => handleFavorite()} />
                        <IconResponse icon={'bookmark'} text={'Favorilerinize Eklendi'} action={status} />
                    </>
                    :
                    <>
                        <Text>when focus search bar from detail</Text>
                    </>
            }
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