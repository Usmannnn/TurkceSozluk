import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Header from '../../components/Header'
import Logo from '../../components/Logo'
import Grabber from '../../components/Grabber'

const { width, height } = Dimensions.get('screen')

const AboutUs = () => {

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
                        <Text style={{ fontWeight: '500', lineHeight: 24, fontSize: 18 }}>Hakkında</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Logo width={100} height={100} />
                </View>
            </View>


            <View style={styles.tail}>
                <Text style={{fontWeight: 'bold', fontSize: 16, textAlign: 'center'}}>Türk Dil Kurumu 
                    <Text style={{fontWeight: '500', fontSize: 16}}>' nun 1945'ten beri yayımlanan Türkçe Sözk'ünün 2011 yılında yapılan
                        11. baskısının gözden geçirilip güncellenerek taşınabilir cihazlar için
                        hazırlanan sürümüdür.
                    </Text>
                </Text>
            </View>
        </View>
    )
}

export default AboutUs

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
        paddingVertical: 30,
        marginHorizontal: 40
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
