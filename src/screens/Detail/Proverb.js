import React, { useState, useRef } from 'react'
import { Text, View, StyleSheet, Platform, Animated, ScrollView, Dimensions } from 'react-native';


import DetailContent from '../../components/Detail/DetailContent';

import Favorite from '../../components/Favorite';
import HandSign from '../../components/HandSign';
import WordCard from '../../components/WordCard';


const { width, height } = Dimensions.get('window')

const HEADER_MIN_HEIGHT = height * 0.1;
const HEADER_MAX_HEIGHT = height * 0.2;

const Proverb = () => {

    const [data, setData] = useState([
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        }
    ])
    const [previous, setPrevios] = useState(0)

    const animatedHeader = useRef(new Animated.Value(0)).current
    const animatedOpacity = useRef(new Animated.Value(1)).current

    const headerHeight = animatedHeader.interpolate(
        {
            inputRange: [0, HEADER_MAX_HEIGHT],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        }
    )

    const backgroundColor = animatedHeader.interpolate(
        {
            inputRange: [0, HEADER_MAX_HEIGHT / 2, HEADER_MAX_HEIGHT],
            outputRange: ['#f1f1f1', '#f8f8f8', '#ffffff']
        }
    )

    const handleScroll = (e) => {

        // must be find better solution
        setPrevios(e)
        if (previous < e) {
            Animated.spring(animatedOpacity, {
                toValue: 0,
                useNativeDriver: true
            }).start()
        } else {
            Animated.spring(animatedOpacity, {
                toValue: 1,
                useNativeDriver: true
            }).start()
        }
    }

    return (
        <View style={styles.container}>

            <DetailContent
                word={'Kalem'}
                origination={'Kalem kılıçtan keskindir.'}
                headerHeight={headerHeight}
                backgroundColor={backgroundColor}
                opacity={animatedOpacity}
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 20 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: animatedHeader } } }],
                    {
                        useNativeDriver: false,
                        listener: (e) => handleScroll(e.nativeEvent.contentOffset.y)
                    }
                )}
            >

                {data.map((item, index) => {
                    return (
                        <View key={index} style={[styles.tail]}>
                            <WordCard text={'asf'} />
                        </View>
                    )
                })}

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginHorizontal: 20,
            marginTop: 15
        },
        contentContainer: {
            marginHorizontal: -20,
            paddingHorizontal: 20,
        },
        iconContainer: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginLeft: -10,
            alignItems: 'center',
            width: width * 0.375
        },
        tailContainer: {
            backgroundColor: 'white',
            borderRadius: 20,
            marginTop: 15,
            paddingHorizontal: 15,
            paddingVertical: 10
        },
        tail: {
            marginHorizontal: -20
        },

    });

export default Proverb