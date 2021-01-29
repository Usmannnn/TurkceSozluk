import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Search from '../screens/Search';
import Detail from '../screens/Detail';
import { View } from 'react-native';

const SearchStack = createStackNavigator();

const SearchStackContainer = () => {
    return (
        <SearchStack.Navigator
            initialRouteName="Search"
            screenOptions={({ route }) => ({
                header: () => <View style={{ margin: 20 }}>
                    <Header
                        size={25}
                        left={'left'}
                        title={route.name}
                        right={'dots-three-horizontal'}
                    />
                </View>
            })}
        >
            <SearchStack.Screen name="Search" component={Search} options={() => ({ headerShown: false })} />
            <SearchStack.Screen name="Detail" component={Detail} options={() => ({ headerTitle: 'Detaylar' })} />
        </SearchStack.Navigator>
    );
};

export default SearchStackContainer;