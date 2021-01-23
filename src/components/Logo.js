import React from 'react'
import { Image,View, Text } from 'react-native'


const Logo = ({ width, height }) => {
    return (
            <Image
                source={require('../../assets/logo-white.png')}
                style={{ width, height }}
                resizeMode={'center'}
            />
    )
}


export default Logo

