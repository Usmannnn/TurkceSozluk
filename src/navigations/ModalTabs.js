import * as React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Contact from '../screens/Modal/Contact';
import Suggestion from '../screens/Modal/Suggestion';


const Tab = createBottomTabNavigator();

const ModalTabContainer = () => {
	return (
		<Tab.Navigator initialRouteName={'Contact'}>
			<Tab.Screen name="Contact" component={Contact} />
			<Tab.Screen name="Suggestion" component={Suggestion} />
		</Tab.Navigator>
	);
}

export default ModalTabContainer