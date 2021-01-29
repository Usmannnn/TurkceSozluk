import React from 'react'
import { View, Modal, TouchableWithoutFeedback, Dimensions } from 'react-native'
import ModalStackContainer from '../navigations/ModalStack'

const { width, height } = Dimensions.get('screen')


const SwipeModal = ({ isVisible, action }) => {

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            style={{ justifyContent: 'flex-end' }}
            onRequestClose={() => action(false)}
        >
            <TouchableWithoutFeedback
                onPress={() => action(false)}
            >
                <View style={{ height: height * 0.375, backgroundColor: 'black', opacity: isVisible ? 0.5 : 1 }} />
            </TouchableWithoutFeedback>
            <View 
                style={{
                    height: height - height * 0.375,
                }}>
                <ModalStackContainer />
            </View>
        </Modal>
    )
}

export default SwipeModal