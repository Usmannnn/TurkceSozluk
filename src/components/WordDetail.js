import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList, Animated, ScrollView } from 'react-native'

import Favorite from './Favorite';
import HandSign from './HandSign';
import Volume from './Volume';

const { width, height } = Dimensions.get('screen')
const HEADER_MIN_HEIGHT = height * 0.1;
const HEADER_MAX_HEIGHT = height * 0.2;

const WordDetail = ({ word, origination, action }) => {

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

    const animatedHeader = useRef(new Animated.Value(HEADER_MAX_HEIGHT)).current

    const headerHeight = animatedHeader.interpolate(
        {
            inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        }
    );

    // const renderRow = ({ item, index }) => {
    //     return (
    //         <View key={index} style={styles.tail}>
    //             <View style={{ flexDirection: 'row' }}>
    //                 <Text style={{ color: '#758291', fontWeight: '400', fontSize: 14, lineHeight: 15, marginRight: 10 }}>{index + 1}</Text>
    //                 <Text style={{ color: '#E11E3C', fontWeight: '500', fontSize: 12, lineHeight: 14, fontStyle: 'italic' }}>{item.kind}</Text>
    //             </View>
    //             <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
    //                 <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#0A151F', lineHeight: 16 }}>{item.desc}</Text>
    //                 <Text style={{ padding: 10, fontWeight: '500', fontSize: 14, color: '#758291', lineHeight: 16 }}>
    //                     {item.example}
    //                     <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#758291', lineHeight: 16 }}>{item.author}</Text>
    //                 </Text>
    //             </View>
    //         </View>
    //     )
    // }

    return (
        <View style={styles.container}>
            <Animated.View style={headerHeight}>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 32, lineHeight: 40 }}>{word}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 36, fontStyle: 'italic' }}>{origination}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.iconContainer}>
                        <Volume />
                        <Favorite />
                    </View>
                    <HandSign />
                </View>
            </Animated.View>


            <ScrollView
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [
                        { nativeEvent: { contentOffset: { y: animatedHeader } } },
                    ],
                    { useNativeDriver: false }

                )}
            >
                {data.map((item, index) => {
                    return (
                        <View key={index} style={[styles.tail, {

                        }]}>
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
            {/* <Animated.FlatList
                // onScroll={e => _onScroll(e.nativeEvent.contentOffset.y)}
                onScroll={Animated.event([
                    { nativeEvent: { contentOffset: { y: animatedHeader } } },
                    { useNativeDriver: true }
                ])}
                scrollEventThrottle={16}
                data={data}
                style={styles.tailContainer}
                renderItem={renderRow}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            /> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 15
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
        borderRadius: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    tail: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#758291',
        marginBottom: 20,
    },
    actionContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default WordDetail