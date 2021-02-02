import * as React from 'react';
import { Text, View } from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Detail from '../screens/Detail';
import Description from '../screens/Detail/Description';
import Proverb from '../screens/Detail/Proverb';
import Compound from '../screens/Detail/Compound';
import XY from '../components/saf';
import Try from '../components/Try';



const Tab = createMaterialTopTabNavigator();

const DetailStack = () => {
	return (
		<Tab.Navigator 
			initialRouteName={'Description'}
			tabBarPosition='top'
			keyboardDismissMode="on-drag"
			screenOptions={({ route }) => ({

				tabBarLabel: ({ focused }) => {

					return (
						<View style={{ alignItems: 'center', width: '100%', height: '100%', marginVertical: 10 }}>
							<Text style={{ textAlign: 'center', fontWeight: '700', fontSize: 12.5, color: focused ? '#183148' : '#758291' }}>
								{route.name === 'Description' ? 'Açıklama' : route.name === 'Proverb' ? 'Atasözleri ve Deyimler' : 'Brirleşik Kelimeler'}
							</Text>
							{/* <View style={{ marginTop: 10, backgroundColor: focused ? '#E11E3C' : '#EBEBEB', width: 40, height: 2, borderRadius: 3 }} /> */}
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
					// backgroundColor: '#EBEBEB',
				},
				style: {
					height: 50,
					elevation: 0,
				}
			}}

		>
			<Tab.Screen name="Description" component={Description} />
			<Tab.Screen name="XY" component={XY} />
			<Tab.Screen name="Proverb" component={Try} />
			<Tab.Screen name="Compound" component={Compound} />
		</Tab.Navigator>
	);
}

export default DetailStack