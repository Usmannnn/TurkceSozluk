import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import TabNavigator from './BottomTabs';


const AppNavigationContainer = () => {
	return (
		<NavigationContainer>
			<TabNavigator />
		</NavigationContainer>
	);
};

export default AppNavigationContainer;