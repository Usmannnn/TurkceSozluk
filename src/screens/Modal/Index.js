import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../components/Logo'
import Grabber from '../../components/Grabber'

const { width, height } = Dimensions.get('screen')

const Index = () => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <ImageBackground
                    source={require('../../../assets/bg.png')}
                    style={{ ...StyleSheet.absoluteFillObject, backgroundColor: 'red' }}
                >
                    <Grabber color={'#B41830'} />
                    <View style={{ alignItems: 'center' }}>
                        <Logo width={100} height={100} color={'white'} />
                        <View style={{ alignItems: 'center' }}>
                            <Text style={{ marginBottom: 15, fontWeight: '700', fontSize: 14, lineHeight: 14, color: 'white' }}>Türk Dil Kurumu Başkanlığı</Text>
                            <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 14, color: '#F3A5B1' }}>v.1.0</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.tail}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('AboutUs')}
                >
                    <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 18 }}>Hakkında</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('ModalTab')}

                >
                    <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 18 }}>İletişim</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container: {
        // height: height * 0.57,
        marginHorizontal: 2,
        marginVertical: 2,
        backgroundColor: '#FFFFFF',
    },
    head: {
        height: height * 0.23,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    tail: {
        height: height - height * 0.66,
        paddingVertical: 30
    },
    button: {
        marginHorizontal: 25,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        paddingVertical: 24,
        borderRadius: 15
    }
})
