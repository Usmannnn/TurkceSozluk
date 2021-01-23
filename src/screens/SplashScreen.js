import React from 'react'
import { Image, StyleSheet, Dimensions, View, Text } from 'react-native'
import Logo from '../components/Logo'

const { width, height } = Dimensions.get('screen')

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={{
                flex: 3,
                justifyContent: 'center',
            }}>
                <Logo width={width * 0.48} height={height * 0.9} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Türkçe Sözlük</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: width * 0.48,
        height: height * 0.1
    },
    text: {
        fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 40,
        color: 'white'
    }
})

export default SplashScreen

