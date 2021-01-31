import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Header from '../components/Header';
import Search from '../screens/Search';
import DetailStack from './DetailStack';

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
            <SearchStack.Screen name="DetailStack" component={DetailStack} options={({route}) => ({ headerTitle: route.name  })} />
        </SearchStack.Navigator>
    );
};

export default SearchStackContainer;