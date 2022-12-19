import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import type { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import type { PageName } from '../../navigation/PageName'
import type { Params } from '../../navigation/Params'
import { styles } from './styles'

interface Props extends StackScreenProps<Params, PageName.ProductScreen> {}

export const ProductScreen = (props: Props) => {
    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()

    const { product, points } = props.route.params

    return (
        <View style={styles.container}>
            <View style={{ ...styles.containerCard, top: top * 0.4 }}>
                <Text style={{ ...styles.textTitleTop, marginTop: top * 2 }}>
                    {product}
                </Text>
            </View>
            <View style={styles.allContainer}>
                <View style={styles.sectionImage}>
                    <View style={styles.card}>
                        <View style={styles.containerImage}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../../assets/notFound.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.containerTextProduct}>
                <Text style={styles.textTitle}>{'Detalle del producto:'}</Text>
                <Text style={styles.textDescription}>
                    {'Comprado el 26 de enero, 2019'}
                </Text>
            </View>
            <View style={styles.containerTextProduct}>
                <Text style={styles.textTitle}>{'Con esta compra acumulaste:'}</Text>
                <Text style={styles.textDescription}>{points + ' puntos'}</Text>
            </View>
            <View style={styles.containerButton2}>
                <View style={{ ...styles.containerButton }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={styles.textButton}>{'Aceptar'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
