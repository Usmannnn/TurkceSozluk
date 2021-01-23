import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import LoginPage from '../screens/LoginPage';
import RegisterPage from '../screens/RegisterPage';
import TabNavigator from './TabNavigator';

const RootStack = createStackNavigator();

const RootStackContainer = () => {
    return (
        <RootStack.Navigator initialRouteName="Login">
            <RootStack.Screen name="Login" component={LoginPage}
                options={({ navigation, route }) => ({
                    headerShown: false
                })} />
            <RootStack.Screen name="Register" component={RegisterPage}
                options={({ navigation, route }) => ({
                    headerShown: false
                })} />
            <RootStack.Screen name="Home" component={TabNavigator}
                options={({ navigation, route }) => ({
                    headerShown: false,
                })}
            />
        </RootStack.Navigator>
    );
};

export default RootStackContainer;