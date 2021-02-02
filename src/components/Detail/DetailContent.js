import React from 'react'
import { StyleSheet, Text, View, Animated , Dimensions} from 'react-native'


import Favorite from '../Favorite'
import HandSign from '../HandSign'
import Volume from '../Volume'

const { height, width } = Dimensions.get('window')


const DetailContent = ({word, origination, headerHeight, backgroundColor, opacity}) => {

    return (
        <Animated.View style={[styles.contentContainer, {
                height: headerHeight,
                backgroundColor: backgroundColor
            }]}
        >
            <View>
                <Text style={{ fontWeight: '700', fontSize: 32, lineHeight: 40 }}>{word}</Text>
                <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 36, fontStyle: 'italic' }}>{origination}</Text>
            </View>
            <Animated.View style={[styles.actionContainer, {
                    opacity: opacity,
                }]}
            >
                <View style={styles.iconContainer}>
                    <Volume />
                    <Favorite />
                </View>
                <HandSign />
            </Animated.View>
        </Animated.View>
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        marginHorizontal: -20,
        paddingHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -10,
        alignItems: 'center',
        width: width * 0.375
    },
    actionContainer: {
        marginTop:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})

export default DetailContent