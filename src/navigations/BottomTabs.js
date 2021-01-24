import * as React from 'react';
import { View } from 'react-native';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MaterialIcons } from 'react-native-vector-icons';

import History from '../screens/History';
// import Search from '../screens/Search';
import SearchStack from './SearchStack'
import Favorite from '../screens/Favorite';


const Tab = createBottomTabNavigator();

const TabContainer = () => {
	return (
		<Tab.Navigator
			initialRouteName={'Search'}
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {

					if (route.name === 'History') {

						return (
							<View style={{ justifyContent: 'space-evenly', alignItems: 'center', width: 30, height: 30 }}>
								<MaterialIcons name={'history'} size={size} color={color} />
								<View style={{ backgroundColor: focused ? color : 'white', width: 5, height: 5, borderRadius: 3 }}></View>
							</View>
						)
					} else if (route.name === 'Search') {

						return (
							<View style={{ backgroundColor: 'white', width: 80, height: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 15 }}>
								<View style={{ backgroundColor: '#E11E3C', width: 56, height: 56, borderRadius: 28, justifyContent: 'center', alignItems: 'center' }}>
									<MaterialIcons name={'search'} size={size} color={'white'} />
								</View>
							</View>
						)
					}
					else if (route.name === 'Favorite') {

						return (
							<View style={{ justifyContent: 'space-evenly', alignItems: 'center', width: 30, height: 30 }}>
								<MaterialIcons name={'bookmark-outline'} size={size} color={color} />
								<View style={{ backgroundColor: focused ? color : 'white', width: 5, height: 5, borderRadius: 3 }}></View>
							</View>
						)
					}
				},
			})}

			tabBarOptions={{
				activeTintColor: '#E11E3C',
				inactiveTintColor: '#758291',
				keyboardHidesTabBar: true,
				showLabel: false,
				style: {
					height: 70,
				}
			}}
		>
			<Tab.Screen name="History" component={History} />
			<Tab.Screen name="Search" component={SearchStack} />
			<Tab.Screen name="Favorite" component={Favorite} />
		</Tab.Navigator>
	);
}

export default TabContainer