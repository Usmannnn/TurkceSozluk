import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, TextInput, Animated, View, Dimensions, TouchableOpacity, BackHandler, Keyboard } from 'react-native'

import { MaterialIcons } from 'react-native-vector-icons';


const { width, height } = Dimensions.get('screen')
const BeginBarWidth = width * 0.9
const EndBarWidth = width * 0.7
const CancelWidth = width * 0.2

const SearchBar = ({ icon, placeholder, onFocusBar }) => {

    const [text, setText] = useState(null)
    const [cancel, setCancel] = useState(null)

    const barWidth = useRef(new Animated.Value(BeginBarWidth)).current;
    const cancelWidth = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        if(onFocusBar) {

            Keyboard.addListener('keyboardDidShow', () => onFocusBar(true))
            Keyboard.addListener('keyboardDidHide', 
                () => {
                    onFocusBar(false)
                    stopFocus()  
                })

            return () => {
                Keyboard.removeListener('keyboardDidShow', () => onFocusBar(true))
                Keyboard.removeListener('keyboardDidHide', 
                () => {
                    onFocusBar(false)
                    stopFocus()  
                })
            }
        } else {
            Keyboard.addListener('keyboardDidHide', () => stopFocus())

            return () => {
                Keyboard.removeListener('keyboardDidHide', () => stopFocus())
            }
        }
    })


    const startFocus = () => {
        Animated.parallel([
            Animated.timing(barWidth, {
                toValue: EndBarWidth,
                duration: 200,
                useNativeDriver: false
            }),
            Animated.timing(cancelWidth, {
                toValue: CancelWidth,
                duration: 200,
                useNativeDriver: false
            })
        ]).start(() => setCancel('Vazgeç'))
    }

    const stopFocus = () => {
        setCancel(null)
        Keyboard.dismiss()

        Animated.parallel([
            Animated.timing(barWidth, {
                toValue: BeginBarWidth,
                duration: 350,
                useNativeDriver: false
            }),
            Animated.timing(cancelWidth, {
                toValue: 0,
                duration: 350,
                useNativeDriver: false
            })
        ]).start()
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.searchContainer, {
                width: barWidth,
            }]}>
                <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialIcons name={icon} size={30} color={'#758291'} />
                </TouchableOpacity>
                <View style={{ flex: 4 }}>
                    <TextInput
                        value={text}
                        onChangeText={value => setText(value)}
                        style={styles.input}
                        placeholder={placeholder}
                        onFocus={() => startFocus()}
                    />
                </View>
            </Animated.View>
            <Animated.View
                style={[styles.cancel, {
                    width: cancelWidth
                }]}
            >
                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}
                    onPress={() => {
                        Keyboard.dismiss()
                        stopFocus()
                    }}
                >
                    <Text style={{ fontWeight: '600', fontSize: 14, lineHeight: 22 }}>{cancel}</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        top: - height * 0.03,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    searchContainer: {
        height: height * 0.065,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: height * 0.015,
    },
    cancel: {
        borderRadius: height * 0.015,
        marginLeft: 10,
        height: height * 0.065,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',

    },
    input: {
        height: '100%',
        width: '100%',
        paddingVertical: 15,
        color: '#758291'
    }
})

export default SearchBar