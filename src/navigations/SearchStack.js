import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Search from '../screens/Search';
import Detail from '../screens/Detail';

const SearchStack = createStackNavigator();

const SearchStackContainer = () => {
    return (
        <SearchStack.Navigator
            initialRouteName="Search"
            screenOptions={({route}) => ({
                header: () => <Header
                    left={'left'}
                    title={route.name}
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