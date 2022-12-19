import React from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import type { ProductsInterface } from '../../interfaces/productsInterface'
import { styles } from './styles'

interface Props {
    product: ProductsInterface
    onPressProduct: (data: ProductsInterface) => void
}

export const DetailProduct = ({ product, onPressProduct }: Props) => {
    const { id, points, is_redemption, createdAt } = product

    const setData = () => {
        onPressProduct(product)
    }

    return (
        <TouchableOpacity onPress={setData}>
            <View style={styles.item} key={id}>
                <Image
                    style={styles.tinyLogo}
                    source={require('../../assets/notFound.png')}
                />
                <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                    <Text style={styles.textProduct1}>{product.product}</Text>
                    <Text style={styles.textProduct2}>
                        {moment(createdAt).day() +
                            ' de ' +
                            moment(createdAt).format('MMMM') +
                            ',' +
                            moment(createdAt).format('YYYY')}
                    </Text>
                </View>

                <View style={styles.containerPoints}>
                    <Text style={styles.textTitle}>{'   >'}</Text>
                    <Text style={styles.textProduct1}>
                        <Text style={is_redemption ? styles.positive : styles.negative}>
                            {is_redemption ? '+' : '-'}
                        </Text>
                        {points}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
