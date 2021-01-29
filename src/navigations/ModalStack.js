import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Index from '../screens/Modal/Index';
import AboutUs from '../screens/Modal/AboutUs';
import ModalTab from './ModalTabs';

const ModalStack = createStackNavigator();

const ModalStackContainer = () => {
    return (
        <ModalStack.Navigator
            initialRouteName="Index"
            screenOptions={({route}) => ({
                header: () => <Header left={'left'} />
            })}
        >
            <ModalStack.Screen name="Index" component={Index} options={() => ({ headerShown: false })} />
            <ModalStack.Screen name="AboutUs" component={AboutUs} options={() => ({ headerShown: false })} />
            <ModalStack.Screen name="ModalTab" component={ModalTab} options={() => ({ headerShown: false })} />
        </ModalStack.Navigator>
    );
};

export default ModalStackContainer;