import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import Favorite from './Favorite';
import HandSign from './HandSign';
import Volume from './Volume';

const { width, height } = Dimensions.get('screen')

const WordDetail = ({ word, origination, action }) => {

    const [data, setData] = useState([
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        },
        {
            kind: 'İSİM',
            desc: 'Yazma, çizme vb. işlerde kullanılan çeşitli biçimlerdeki araç:',
            example: '"Kağıt, kalem, mürekkep, hepsi masanın üstündedir."   ',
            author: '- Falih Rıfkı Atay'
        }
    ])

    const renderRow = ({ item, index }) => {
        return (
            <View key={index} style={styles.tail}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#758291', fontWeight: '400', fontSize: 14, lineHeight: 15, marginRight: 10 }}>{index + 1}</Text>
                    <Text style={{ color: '#E11E3C', fontWeight: '500', fontSize: 12, lineHeight: 14, fontStyle: 'italic' }}>{item.kind}</Text>
                </View>
                <View style={{ paddingLeft: 20, paddingVertical: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#0A151F', lineHeight: 16 }}>{item.desc}</Text>
                    <Text style={{ padding: 10, fontWeight: '500', fontSize: 14, color: '#758291', lineHeight: 16 }}>
                        {item.example}
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#758291', lineHeight: 16 }}>{item.author}</Text>
                    </Text>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <View>
                    <Text style={{ fontWeight: '700', fontSize: 32, lineHeight: 40 }}>{word}</Text>
                    <Text style={{ fontWeight: '500', fontSize: 14, lineHeight: 36, fontStyle: 'italic' }}>{origination}</Text>
                </View>
                <View style={styles.actionContainer}>
                    <View style={styles.iconContainer}>
                        <Volume />
                        <Favorite />
                    </View>
                    <HandSign />
                </View>
            </View>
            <FlatList
                data={data}
                style={styles.tailContainer}
                renderItem={renderRow}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: -10,
        alignItems: 'center',
        width: width * 0.375
    },
    head: {
    },
    tailContainer: {
        backgroundColor: 'white',
        borderRadius: 1,
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    tail: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: '#758291',
        marginBottom: 20
    },
    actionContainer: {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default WordDetail