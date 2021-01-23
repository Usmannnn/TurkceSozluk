import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from 'react-native-vector-icons';

import History from '../screens/History';
import Search from '../screens/Search';
import Favorite from '../screens/Favorite';


const Tab = createBottomTabNavigator();

const TabContainer = () => {
	return (
		<Tab.Navigator
            initialRouteName={'Search'}
			// screenOptions={({ route }) => ({
			// 	tabBarIcon: ({ focused, color, size }) => {
			// 		let iconName;
			// 		if (route.name === 'Home') {
			// 			iconName = focused
			// 				? 'ios-home'
			// 				: 'ios-home-outline';
			// 		} else if (route.name === 'Profile') {
			// 			iconName = focused ? 'ios-person' : 'ios-person-outline';
			// 		}
			// 		else if (route.name === 'Cart') {
			// 			iconName = focused ? 'ios-cart' : 'ios-cart-outline';
			// 		}
			// 		return <Ionicons name={iconName} size={size} color={color} /> 
			// 	},
			// })}
			// tabBarOptions={{
			// 	activeTintColor: 'dodgerblue',
			// 	inactiveTintColor: 'gray',
			// 	keyboardHidesTabBar: true,
			// }}
		>
			<Tab.Screen name="History" component={History} />
			<Tab.Screen name="Search" component={Search} />
			<Tab.Screen name="Favorite" component={Favorite} />
		</Tab.Navigator>
	);
}

export default TabContainer