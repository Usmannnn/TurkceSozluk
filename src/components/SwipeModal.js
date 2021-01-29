import React from 'react'
import { StyleSheet, Text, View, Modal, Dimensions, ImageBackground, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Logo from './Logo'


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
                onPress={() => action(false)} >
                <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <View style={styles.head}>
                    <ImageBackground
                        source={require('../../assets/bg.png')}
                        style={{ ...StyleSheet.absoluteFill, backgroundColor: 'red' }}
                    >
                        <TouchableOpacity
                            onPress={() => action(false)}
                            style={{
                                marginVertical: 10,
                                alignSelf: 'center',
                                width: '25%',
                                height: 7,
                                borderRadius: 4,
                                backgroundColor: '#B41830'
                            }}
                        ></TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Logo width={100} height={100} />
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ marginBottom: 15, fontWeight: '700', fontSize: 14, lineHeight: 14, color: 'white' }}>Türk Dil Kurumu Başkanlığı</Text>
                                <Text style={{ fontWeight: '400', fontSize: 12, lineHeight: 14, color: '#F3A5B1' }}>v.1.0</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.tail}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => alert('as')}
                    >
                        <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 18 }}>Hakkında</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 18 }}>İletişim</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default SwipeModal

const styles = StyleSheet.create({
    container: {
        // height: height * 0.57,
        marginHorizontal: 2,
        marginVertical: 2,
    },
    head: {
        height: height * 0.23,
    },
    tail: {
        height: height - height * 0.66,
        backgroundColor: '#FFFFFF',
        paddingVertical: 30
    },
    button: {
        marginHorizontal: 25,
        marginTop: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAED',
        paddingVertical: 24,
        borderRadius: 15
    }
})
