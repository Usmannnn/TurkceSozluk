import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../screens/Search';
import Detail from '../screens/Detail';


const SearchStack = createStackNavigator();

const SearchStackContainer = () => {
    return (
        <SearchStack.Navigator initialRouteName="Search">
            <SearchStack.Screen name="Search" component={Search} />
            <SearchStack.Screen name="Detail" component={Detail} />
        </SearchStack.Navigator>
    );
};

export default SearchStackContainer;