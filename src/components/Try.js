import React, { useState, useRef, useEffect } from 'react'
import { Text, View, StyleSheet, Platform, Animated, ScrollView, Dimensions } from 'react-native';
import Favorite from './Favorite';
import HandSign from './HandSign';
import Volume from './Volume';


const { width, height } = Dimensions.get('window')


const HEADER_MIN_HEIGHT = height * 0.1;
const HEADER_MAX_HEIGHT = height * 0.2;

const Try = () => {

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
            inputRange: [0, (HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT)],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp'
        }
    )

    const handleScroll = (e) => {

        // must be find another solution
        setPrevios(e)
        if(previous < e) {
            console.log('up')
            Animated.timing(animatedOpacity, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(animatedOpacity, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true
            }).start()
        }       
    }

    return (
        <View style={styles.container}>

            <Animated.View style={{ height: headerHeight}}>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 32, lineHeight: 40 }}>Kalem</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 36, fontStyle: 'italic' }}>Kalen Kalelahf</Text>
                </View>
                <Animated.View style={[styles.actionContainer, {
                    opacity: animatedOpacity,
                    zIndex: -1
                }]}>
                    <View style={styles.iconContainer}>
                        <Volume />
                        <Favorite />
                    </View>
                    <HandSign />
                </Animated.View>
            </Animated.View>

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
                    style={{zIndex: 2}}
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
        },


        animatedHeaderContainer: {
            position: 'absolute',
            top: (Platform.OS == 'ios') ? 20 : 0,
            left: 0,
            right: 0,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red'
        },
        headerText: {
            color: 'white',
            fontSize: 22
        },
        item: {
            backgroundColor: '#ff9e80',
            margin: 8,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center'
        },
        itemText: {
            color: 'black',
            fontSize: 16
        }

    });

export default Try