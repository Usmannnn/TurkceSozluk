import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, Animated, Dimensions } from 'react-native'

import { Feather } from 'react-native-vector-icons';

const { width, height } = Dimensions.get('screen')

const IconResponse = ({ icon, text, action }) => {

    const position = useRef(new Animated.Value(-100)).current;
    
    //until redux entegration
    useEffect(() => {
        if (!action) {
            Animated.timing(position, {
                toValue: 25,
                timing: 100,
                useNativeDriver: false
            }).start(() => {
                setInterval(() => {
                    Animated.timing(position, {
                        toValue: -100,
                        timing: 3000,
                        useNativeDriver: false
                    }).start()
                }, 1000)
            })
        }
    }, [action])

    return (
        <Animated.View
            style={[styles.container, {
                bottom: position
            }]}
        >
            <Feather name={icon} size={20} color={'white'} />
            <Text style={{ fontWeight: '700', fontSize: 14, color: 'white' }}>{text}</Text>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: height * 0.065,
        width: width * 0.5,
        backgroundColor: '#48515B',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignSelf: 'center',
        borderRadius: 15,
    }
})

export default IconResponse 