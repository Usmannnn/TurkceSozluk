import React from 'react'
import { Image, StyleSheet, ImageBackground, Dimensions, View, Text } from 'react-native'
import Logo from '../components/Logo'

const { width, height } = Dimensions.get('screen')

const SplashScreen = () => {
    return (
        <ImageBackground 
            style={styles.container}
            source={require('../../assets/bg.png')}
        >
            <View style={{
                flex: 3,
                justifyContent: 'center',
            }}>
                <Logo width={width * 0.48} height={height * 0.9} />
            </View>
            <View style={{ flex: 1 }}>
                <Text style={styles.text}>Türkçe Sözlük</Text>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E11E3C'
    },
    logo: {
        width: width * 0.48,
        height: height * 0.1
    },
    text: {
        // fontFamily: 'SF Pro Text',
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 40,
        color: 'white'
    }
})

export default SplashScreen

