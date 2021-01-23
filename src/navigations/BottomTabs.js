import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from 'react-native-vector-icons';

import History from '../screens/History';
import Search from '../screens/Search';
import Favorite from '../screens/Favorite';


const Tab = createBottomTabNavigator();

const TabContainer = () => {
	return (
		<Tab.Navigator
            initialRouteName={'Search'}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					if (route.name === 'History') {
						iconName = 'history'
					} else if (route.name === 'Search') {
						iconName = 'search';
					}
					else if (route.name === 'Favorite') {
						iconName = 'bookmark';
					}
					return <MaterialIcons name={iconName} size={size} color={color} /> 
				},
			})}
            
			tabBarOptions={{
				activeTintColor: 'dodgerblue',
				inactiveTintColor: 'gray',
				keyboardHidesTabBar: true,
                showLabel: false
			}}
		>
			<Tab.Screen name="History" component={History} />
			<Tab.Screen name="Search" component={Search} />
			<Tab.Screen name="Favorite" component={Favorite} />
		</Tab.Navigator>
	);
}

export default TabContainer