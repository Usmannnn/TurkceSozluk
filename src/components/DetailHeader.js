import React, { useState } from 'react'
import { StyleSheet, Dimensions, View } from 'react-native'
import Header from './Header'
import SearchBar from './SearchBar'

const { height } = Dimensions.get('window')

const DetailHeader = ({ left, right, title }) => {

    const [isFocusBar, setIsFocusBar] = useState(false)
    const [searchedValue, setSearchedValue] = useState('')


    return (
        <View style={styles.container}>
            <Header size={25} left={left} title={title} right={right} />
            <View style={styles.bar}>
                <SearchBar
                    icon={'search'}
                    placeholder={"Türkçe Sözlük'te Ara"}
                    onFocusBar={status => setIsFocusBar(status)}
                    onChangeValue={text => setSearchedValue(text)}
                    value={searchedValue}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    bar: {
        alignItems: 'center',
        marginTop: height * 0.0325,
        paddingTop: height * 0.03,
        height: height * 0.065,
    }
})

export default DetailHeader