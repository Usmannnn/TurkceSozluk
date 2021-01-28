import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Dimensions, View, ImageBackground, Animated } from 'react-native'

import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import HomeCard from '../components/HomeCard'

const { width, height } = Dimensions.get('screen')

const onFocusedHeight = height * 0.07
const nonFocusedHeight = height * 0.3

const Search = () => {

    const [isFocusBar, setIsFocusBar] = useState(false)
    const barPosititon = useRef(new Animated.Value(nonFocusedHeight)).current;

    useEffect(() => {

        if( isFocusBar ) {
            Animated.timing(barPosititon, {
                toValue: onFocusedHeight,
                duration: 180,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(barPosititon, {
                toValue: nonFocusedHeight,
                duration: 180,
                useNativeDriver: false
            }).start()
        }

    }, [isFocusBar])



    return (
        <View style={styles.container}>
            <Animated.View style={{
                height: barPosititon,
                backgroundColor: isFocusBar ? 'white' : '#E11E3C'
            }}>
                {
                    !isFocusBar && <ImageBackground
                        source={require('../../assets/bg.png')}
                        style={{
                            ...StyleSheet.absoluteFillObject,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Logo width={width * 0.4} height={height * 0.1} />
                    </ImageBackground>
                }
            </Animated.View>
            <SearchBar icon={'search'} placeholder={"Türkçe Sözlük'te Ara"} onFocusBar={status => setIsFocusBar(status)} />
            <View style={styles.tail}>
                <HomeCard title={'Bir deyim'} word={'on para'} description={'çok az (para)'} />
                <HomeCard title={'Bir deyim'} word={'on para lorelajsflasjf'} description={'safssssssssssssssssssssssssssssssssssssssssssssssssssssss'} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8'
    },
    tail: {
        backgroundColor: '#F8F8F8',
        height: height * 0.7,
        paddingHorizontal: width - width * 0.9,
        paddingTop: width - width * 0.9,
    },
})

export default Search