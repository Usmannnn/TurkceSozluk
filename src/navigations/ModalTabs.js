import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contact from '../screens/Modal/Contact';
import Suggestion from '../screens/Modal/Suggestion';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const ModalTabContainer = () => {
	return (
		<Tab.Navigator initialRouteName={'Contact'}

			screenOptions={({ route }) => ({

				tabBarIcon: ({ focused }) => {

					return (
						<View style={{ marginTop: 10, justifyContent: 'space-evenly', alignItems: 'center', flex: 1, width: '90%' }}>
							<Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 20, color: focused ? '#183148' : '#758291' }}>
								{route.name === 'Contact' ? 'İletişim' : 'Katkı ve Öneriler'}
							</Text>
							<View style={{ backgroundColor: focused ? '#E11E3C' : '#F8F8F8', width: 25, height: 2, borderRadius: 3 }} />
						</View>
					)

				}}
			)}

			tabBarOptions={{
				activeTintColor: '#183148',
				inactiveTintColor: '#758291',
				keyboardHidesTabBar: true,
				showLabel: false,
				style: {
					height: 70,
					backgroundColor: '#F8F8F8'
				}
			}}

		>
			<Tab.Screen name="Contact" component={Contact} />
			<Tab.Screen name="Suggestion" component={Suggestion} />
		</Tab.Navigator>
	);
}

export default ModalTabContainer