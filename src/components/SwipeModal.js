import { useRoute } from '@react-navigation/native'
import React, { useEffect, useLayoutEffect } from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

import Modal from 'react-native-modal'
import ModalStackContainer from '../navigations/ModalStack'

const { width, height } = Dimensions.get('screen')


const SwipeModal = ({ isVisible, action }) => {

    return (
        <Modal
            animationType="slide"
            style={styles.modalContainer}
            swipeDirection={['down']}
            onSwipeComplete={(e) => action(false)}
            useNativeDriverForBackdrop
            coverScreen={true}
            onRequestClose={() => action(false)}
            isVisible={isVisible}
        >
            <View style={{ justifyContent: 'flex-end', ...StyleSheet.absoluteFill}}>
                <ModalStackContainer />
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    modalContainer: {
        marginTop: height - height * 0.6,
        marginBottom: 0,
        width: '98%',
        alignSelf: 'center'
    }
})

export default SwipeModal