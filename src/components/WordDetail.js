import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

import { Feather, FontAwesome } from 'react-native-vector-icons';

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
                        <TouchableOpacity style={styles.icons}>
                            <Feather name={'volume-2'} size={25} color={'black'} />
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.icons}
                            onPress={() => action()}
                        >
                            <Feather name={'bookmark'} size={25} color={'black'} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.languange}>
                        <FontAwesome name="hand-o-up" size={25} color="black" />
                        <Text style={{ fontWeight: '700', fontSize: 14, lineHeight: 20 }}>Türk İşaret Dili</Text>
                    </TouchableOpacity>
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
    icons: {
        backgroundColor: 'white',
        borderRadius: width * 0.26,
        height: width * 0.13,
        width: width * 0.13,
        justifyContent: 'center',
        alignItems: 'center'
    },
    languange: {
        backgroundColor: 'white',
        borderRadius: 999,
        height: height * 0.075,
        width: width * 0.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    actionContainer: {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default WordDetail