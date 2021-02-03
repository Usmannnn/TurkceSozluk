import React, { useState } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Modal from 'react-native-modal'

import EmptyScreen from '../components/EmptyScreen';
import Header from '../components/Header';
import WordCard from '../components/WordCard';

const History = () => {

    const [data, setData] = useState([
        {
            id: 0,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 1,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 2,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 3,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 4,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 5,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 6,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
        {
            id: 7,
            text: 'Lorem ipsum dolor sit amet',
        },
    ])

    return (
        <View style={styles.contentContainer}>
            <View style={{ margin: 20 }}>
                <Header size={25} left={'left'} title={'Geçmiş'} right={'dots-three-horizontal'} />
            </View>
            {
                data.length == 0 ?
                    <EmptyScreen icon={'history'} message={'Henüz geçmiş yok.'} />
                    :
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => <WordCard text={item.text} />}
                        style={styles.contentContainer}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
            }
            <Modal
                animationType="slide"
                transparent={true}
                // backdropOpacity={0}
                hasBackdrop={false}
                style={styles.modalContainer}
                swipeDirection={'down'}
                // onSwipeComplete={(e) => action(false)}
                useNativeDriverForBackdrop
                coverScreen={true}
                // onRequestClose={() => action(false)}
                isVisible={true}
            >
                <View style={styles.modalContent}>
                </View>
            </Modal>
        </View>
    )
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
    modalContainer: {
        marginBottom: 0,
        width: '98%',
        alignSelf: 'center',
    },
    modalContent: {
       backgroundColor: 'red',
       height: 300,
       position: 'absolute',
       bottom: 0,
       left: 0,
       right: 0
    }
})

export default History