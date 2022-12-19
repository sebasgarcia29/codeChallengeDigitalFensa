import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from '../screens/home/HomeScreen'
import { ProductScreen } from '../screens/product/ProductScreen'
import type { Params } from './Params'
import { PageName } from './PageName'

const Stack = createStackNavigator<Params>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: 'white',
                },
            }}>
            <Stack.Screen name={PageName.HomeScreen} component={HomeScreen} />
            <Stack.Screen name={PageName.ProductScreen} component={ProductScreen} />
        </Stack.Navigator>
    )
}