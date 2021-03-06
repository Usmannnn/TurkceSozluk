import React, { useState, useEffect, useRef } from 'react'
import { StyleSheet, Dimensions, View, Text, ImageBackground, Animated, TouchableOpacity, Image } from 'react-native'

import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'
import HomeCard from '../components/HomeCard'
import WordCard from '../components/WordCard'
import SwipeModal from '../components/SwipeModal'

import { Entypo } from 'react-native-vector-icons';
import SpecialLetter from '../components/SpecialLetter'
import { useNavigation } from '@react-navigation/native'

const { width, height } = Dimensions.get('screen')

const onFocusedHeight = height * 0.07
const nonFocusedHeight = height * 0.3

const Search = () => {

    const [isFocusBar, setIsFocusBar] = useState(false)
    const [isModalActive, setModalStatus] = useState(false)
    const [searchedValue, setSearchedValue] = useState('')

    const barPosititon = useRef(new Animated.Value(nonFocusedHeight)).current;

    const navigation = useNavigation()

    useEffect(() => {
        setSearchedValue('')
        if (isFocusBar) {
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

    const handleModal = () => {
        setModalStatus(true)
    }

    return (
        <View style={styles.container}>
            <Animated.View style={{
                height: barPosititon,
                backgroundColor: isFocusBar ? '#F8F8F8' : '#E11E3C'
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
                        <TouchableOpacity
                            style={{ width: 50, alignItems: 'flex-end', position: 'absolute', top: 20, right: 20, height: 20 }}
                            onPress={() => handleModal()}
                        >
                            <Entypo name={'dots-three-horizontal'} size={20} color={'#000000'} />
                        </TouchableOpacity>
                        <Logo width={width * 0.4} height={height * 0.1} color={'white'} />
                    </ImageBackground>
                }
            </Animated.View>
            <SearchBar
                icon={'search'}
                placeholder={"Türkçe Sözlük'te Ara"}
                onFocusBar={status => setIsFocusBar(status)}
                onChangeValue={text => setSearchedValue(text)}
                value={searchedValue}
            />
            {
                !isFocusBar ?
                    <View style={styles.tail}>
                        <HomeCard title={'Bir deyim'} word={'on para'} description={'çok az (para)'} />
                        <HomeCard title={'Bir deyim'} word={'on para lorelajsflasjf'} description={'safssssssssssssssssssssssssssssssssssssssssssssssssssssss'} />
                    </View> 
                    
                    :
                    
                    searchedValue === '' ?
                        <View style={{ backgroundColor: '#EBEBEB', flex: 1 }}>
                            <SpecialLetter />
                            <View style={{ marginHorizontal: 25, marginBottom: 10 }}>
                                <Text style={{ fontWeight: '600', lineHeight: 15, fontSize: 14, color: '#758291' }}>Son Aramalar</Text>
                            </View>
                            <WordCard text={'laşsfalisfşaif00000'} />
                            <WordCard text={'laşsfalisfşaif00000'} />
                            <WordCard text={'laşsfalisfşaif00000'} />
                        </View> 
                        
                        :

                        <View style={{ backgroundColor: '#EBEBEB', flex: 1 }}>
                            <SpecialLetter />
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Detail')}
                            >
                                <WordCard text={'laşsfalisfşaif00000'} icon={'right'} />
                            </TouchableOpacity>
                            <WordCard text={'laşsfalisfşaif00000'} icon={'right'} />
                            <WordCard text={'laşsfalisfşaif00000'} icon={'right'} />
                        </View>

            }



            {/* 
                text girilip klavyeden entera basılınca sonuç yok ise gösterilecek
                <View style={{ backgroundColor: '#EBEBEB', flex: 1 }}>
                    <SpecialLetter />
                    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                        <Image source={require('../../assets/icon-book.png')} style={{ width: 50, height: 50 }} />
                        <Text style={{ color: '#48515B', fontWeight: '600', fontSize: 16, lineHeight: 20 }}>Aradığınız sözcük bulunamadı.</Text>
                    </View>
                </View> 
            */}
            <SwipeModal isVisible={isModalActive} action={status => setModalStatus(status)} />
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