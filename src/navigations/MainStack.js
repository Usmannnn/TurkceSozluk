import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabs';


const MainStack = createStackNavigator();

const MainStackContainer = () => {
    return (
        <MainStack.Navigator initialRouteName="TabNav">
            <MainStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
            <MainStack.Screen name="TabNav" component={BottomTabs} options={{ headerShown: false }} />
        </MainStack.Navigator>
    );
};

export default MainStackContainer;