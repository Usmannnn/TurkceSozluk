import React from 'react'
import { StyleSheet, Dimensions, View, Image, ImageBackground, LogBox } from 'react-native'

import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import HomeCard from '../components/HomeCard'


const { width, height } = Dimensions.get('screen')

const Search = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <ImageBackground
                    source={require('../../assets/bg.png')}
                    style={{ ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' }}
                >
                    <Logo width={width * 0.4} height={height * 0.1} />
                </ImageBackground>
            </View>
            <SearchBar icon={'search'} placeholder={"Türkçe Sözlük'te Ara"} />
            <View style={styles.tail}>
                <HomeCard title={'Bir deyim'} word={'on para'} description={'çok az (para)'} />
                <HomeCard title={'Bir deyim'} word={'on para lorelajsflasjf'} description={'çok az (para)safsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    head: {
        height: height * 0.3,
        backgroundColor: '#E11E3C'
    },
    tail: {
        backgroundColor: '#F8F8F8',
        height: height * 0.7,
        paddingHorizontal: width - width * 0.9,
        paddingTop: width - width * 0.9,
    },
})

export default Search