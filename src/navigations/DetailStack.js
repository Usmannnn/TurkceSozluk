import * as React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Description from '../screens/Detail/Description';
import Proverb from '../screens/Detail/Proverb';
import Compound from '../screens/Detail/Compound';


const Tab = createMaterialTopTabNavigator();

const DetailStack = () => {
	return (
		<Tab.Navigator 
			initialRouteName={'Description'}
			tabBarPosition='top'
			keyboardDismissMode="on-drag"
			screenOptions={({ route }) => ({

				tabBarLabel: ({ focused }) => {
					// reduxa geçince background rengi globalleştirilecek
					return (
						<View style={{ alignItems: 'center', width: '100%', height: '100%', marginVertical: 10 }}>
							<Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 12.5, color: focused ? '#183148' : '#758291' }}>
								{route.name === 'Description' ? 'Açıklama' : route.name === 'Proverb' ? 'Atasözleri' : 'Brirleşik Kelimeler'}
							</Text>
							<View style={{ marginTop: 10, backgroundColor: focused ? '#E11E3C' : '#F1F1F1', width: 40, height: 2, borderRadius: 3 }} />
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
					backgroundColor: '#F1F1F1',
				},
				style: {
					height: 50,
					elevation: 0,
				}
			}}

		>
			<Tab.Screen name="Description" component={Description} />
			<Tab.Screen name="Proverb" component={Proverb} />
			<Tab.Screen name="Compound" component={Compound} />
		</Tab.Navigator>
	);
}

export default DetailStack