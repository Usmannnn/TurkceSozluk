import React, { useRef } from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import WordDetail from '../../components/WordDetail'


const Description = () => {
    return (
        <View style={styles.container}>
            <WordDetail word={'Kalem'} origination={'Arapça kalem'} action={() => handleFavorite()} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default Description