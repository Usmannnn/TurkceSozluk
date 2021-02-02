import React, { useState, useRef } from 'react'
import { Text, View, StyleSheet, Platform, Animated, ScrollView, Dimensions } from 'react-native';


import DetailContent from '../../components/Detail/DetailContent';

import Favorite from '../../components/Favorite';
import HandSign from '../../components/HandSign';
import Volume from '../../components/Volume';


const { width, height } = Dimensions.get('window')

const HEADER_MIN_HEIGHT = height * 0.1;
const HEADER_MAX_HEIGHT = height * 0.2;

const Description = () => {

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
            outputRange: ['#F8F8F8', 'whitesmoke', 'white']
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
                style={styles.tailContainer}
            >

                {data.map((item, index) => {
                    return (
                        <View key={index} style={[styles.tail]}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: '#758291', fontWeight: '400', fontSize: 14, lineHeight: 15, marginRight: 10 }}>{index + 1}</Text>
                                <Text style={{ color: '#E11E3C', fontWeight: '500', fontSize: 12, lineHeight: 14, fontStyle: 'italic' }}>{item.kind}</Text>
                            </View>
                            <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#0A151F', lineHeight: 16 }}>{item.desc}</Text>
                                <Text style={{ padding: 10, fontWeight: '500', fontSize: 14, color: '#758291', lineHeight: 16 }}>
                                    {item.example}
                                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#758291', lineHeight: 16 }}>{item.author}</Text>
                                </Text>
                            </View>
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
            borderBottomWidth: 1,
            borderStyle: 'dashed',
            borderColor: '#758291',
            marginBottom: 20,
        },

    });

export default Description