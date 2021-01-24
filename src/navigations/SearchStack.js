import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../screens/Search';
import Detail from '../screens/Detail';
import Header from '../components/Header';

const SearchStack = createStackNavigator();

const SearchStackContainer = () => {
    return (
        <SearchStack.Navigator
            initialRouteName="Search"
            screenOptions={() => ({
                header: () => <Header
                    left={'left'}
                    title={'Hearas'}
                    right={'dots-three-horizontal'}
                />
            })}
        >
            <SearchStack.Screen name="Search" component={Search} options={() => ({ headerShown: false })} />
            <SearchStack.Screen name="Detail" component={Detail} />
        </SearchStack.Navigator>
    );
};

export default SearchStackContainer;