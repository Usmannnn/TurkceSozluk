import * as React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import One from '../components/One';
import Two from '../components/Two';
import Detail from '../screens/Detail';


const Tab = createMaterialTopTabNavigator();

const DetailStack = () => {
	return (
		<Tab.Navigator initialRouteName={'Description'}
			tabBarPosition='bottom'
			keyboardDismissMode="on-drag"
			screenOptions={({ route }) => ({

				tabBarLabel: ({ focused }) => {

					return (
						<View style={{ alignItems: 'center', width: '100%', height: '100%', justifyContent: 'center' }}>
							<Text style={{ textAlign: 'left', fontWeight: '700', fontSize: 12.5, color: focused ? '#183148' : '#758291' }}>
								{route.name === 'Description' ? 'Açıklama' : route.name === 'Proverb' ? 'Atasözleri ve Deyimler' : 'Brirleşik Kelimeler'}
							</Text>
							<View style={{ marginTop: 10, backgroundColor: focused ? '#E11E3C' : '#EBEBEB', width: 40, height: 2, borderRadius: 3 }} />
						</View>
					)

				}
			}
			)}

			tabBarOptions={{
				activeTintColor: '#183148',
				inactiveTintColor: '#758291',
				keyboardHidesTabBar: true,
				showLabel: true,
				tabStyle: {
					backgroundColor: '#EBEBEB',
				},
				style: {
					height: 50,
					elevation: 0,
				}
			}}

		>
			<Tab.Screen name="Description" component={Detail} />
			<Tab.Screen name="Proverb" component={Two} />
		</Tab.Navigator>
	);
}

export default DetailStack