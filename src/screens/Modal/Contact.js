import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Header from '../../components/Header'
import Grabber from '../../components/Grabber'

import { AntDesign, Feather } from 'react-native-vector-icons';
import { PanGestureHandler } from 'react-native-gesture-handler'


const { width, height } = Dimensions.get('screen')

const Contact = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Grabber color={'#DEE3E3'} />
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#DEE3E3',
                            marginLeft: 15,
                            height: 30, width: 30,
                            borderRadius: 15,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={() => navigation.goBack()}
                    >
                        <Header size={15} left={'left'} />
                    </TouchableOpacity>
                    <View style={{ width: '77%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontWeight: '500', lineHeight: 24, fontSize: 18 }}>İletişim Bilgileri</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'flex-start', marginVertical: 30, marginHorizontal: 20 }}>
                    <Text style={{ fontWeight: '700', fontSize: 18, lineHeight: 18 }}>Türk Dil Kurumu Başkanlığı</Text>
                    <View style={{ paddingVertical: 10 }}>
                        <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 18, color: '#758291' }}>Atatürk Bulvarı No: 217 06680</Text>
                        <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 18, color: '#758291' }}>Kavaklıdere/ANKARA</Text>
                    </View>
                </View>
            </View>


            <View style={styles.tail}>
                <View>
                    <View style={styles.info}>
                        <Feather name={'phone'} size={18} color={'red'} />
                        <Text style={{ marginLeft: 20, color: '#758291', fontWeight: '700', fontSize: 16, lineHeight: 20 }}>+90 312 457 52 00</Text>
                    </View>
                    <View style={styles.info}>
                        <AntDesign name={'printer'} size={18} color={'red'} />
                        <Text style={{ marginLeft: 20, color: '#758291', fontWeight: '700', fontSize: 16, lineHeight: 20 }}>+90 312 457 52 00</Text>
                    </View>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('AboutUs')}
                    >
                        <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 18 }}>E-Posta Yaz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        // height: height * 0.57,
        marginHorizontal: 2,
        marginVertical: 2,
        backgroundColor: '#FFFFFF',
    },
    head: {
        height: height * 0.23,
        marginTop: 15,
    },
    tail: {
        height: height - height * 0.66,
        marginHorizontal: 40
    },
    button: {
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        paddingVertical: 24,
        borderRadius: 15
    },
    info: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: -20
    },
    button: {
        marginHorizontal: -20,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        paddingVertical: 24,
        borderRadius: 15
    }
})
