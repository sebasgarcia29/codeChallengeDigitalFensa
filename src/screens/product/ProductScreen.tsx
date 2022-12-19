import React from 'react'
import { View, Text } from 'react-native'

export const ProductScreen = (props: any) => {


    console.log('params', props.route.params);

    return (
        <View>
            <Text>ProductScreen</Text>
        </View>
    )
}
