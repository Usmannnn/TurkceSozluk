import React from 'react'
import { Image } from 'react-native'


const Logo = ({ width, height, color }) => {
    return (
        <Image
            source={color === 'white' ? require('../../assets/logo-white.png') : require('../../assets/logo-red.png')}
            style={{ width, height }}
            resizeMode={'contain'}
        />
    )
}


export default Logo

