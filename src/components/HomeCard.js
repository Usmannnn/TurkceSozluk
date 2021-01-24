import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const { width, height } = Dimensions.get('window')

const HomeCard = ({ title, word, description }) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            style={styles.container}
            onPress={() => navigation.navigate('Detail')}
        >
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <Text style={styles.word}>{word}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        height: height * 0.13,
        marginBottom: 15,
    },
    titleContainer: {
        height: height * 0.13 / 5,
    },
    contentContainer: {
        backgroundColor: 'white',
        paddingVertical: 15,
        borderRadius: 8
    },
    content: {
        marginHorizontal: 15,
        paddingHorizontal: 10,
        borderLeftWidth: 2,
        borderColor: '#E3E5E8'
    },
    title: {
        // fontFamily: 'SF Pro Text',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 15,
        color: '#758291',
    },
    word: {
        color: '#0A151F',
        fontWeight: '700',
        fontSize: 18,
        // fontFamily: 'SF Pro Text',
        lineHeight: 26,
        marginBottom: 5
    },
    description: {
        // fontFamily: 'SF Pro Text',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        color: '#48515B'

    }
})

export default HomeCard