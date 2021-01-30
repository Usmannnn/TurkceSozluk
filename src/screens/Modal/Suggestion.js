import React, { useLayoutEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Dimensions, Image } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'

import Header from '../../components/Header'
import Grabber from '../../components/Grabber'

import { AntDesign, Feather } from 'react-native-vector-icons';

const { width, height } = Dimensions.get('screen')

const Suggestion = () => {

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
                        <Text style={{ fontWeight: '500', lineHeight: 24, fontSize: 18 }}>Katkı ve Öneriler</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tail}>
                <Image source={require('../../../assets/icon-message.jpg')} style={{ width: 50, height: 50 }} />
                <Text style={{ textAlign: 'center', fontWeight: '500', fontSize: 16, lineHeight: 22, color: '#758291' }}>Katkı ve önerileriniz için bize e-posta gönderebilirsiniz.</Text>
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

export default Suggestion

const styles = StyleSheet.create({
    container: {
        height: height * 0.1,
        marginHorizontal: 2,
        marginVertical: 2,
    },
    head: {
        marginTop: 15,
    },
    tail: {
        height: height * 0.3,
        marginVertical: 40,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    info: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: -20
    },
    button: {
        paddingHorizontal: 100,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        paddingVertical: 24,
        borderRadius: 15
    }
})
