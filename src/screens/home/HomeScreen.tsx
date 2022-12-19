import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DetailProduct } from '../../components/DetailProduct/DetailProduct'
import { useProducts } from '../../hooks/useProducts'
import type { ProductsInterface } from '../../interfaces/productsInterface'
import { styles } from './styles'
import { PageName } from '../../navigation/PageName'

export const HomeScreen = () => {
    const { top } = useSafeAreaInsets()
    const navigation = useNavigation()

    const { products, loadOnlyNegative, loadOnlyPositive, isSelected, loadProducts } =
        useProducts()

    const Item = (data: any) => (
        <DetailProduct product={data.data.item} onPressProduct={onPressProduct} />
    )

    const renderItem = (product: ProductsInterface) => <Item data={product} />

    const onPressProduct = (data: ProductsInterface) => {
        navigation.navigate(PageName.ProductScreen, data)
    }

    return (
        <View style={styles.container}>
            <View
                style={{
                    ...styles.sectionTitle,
                    top: top + 20,
                }}>
                <Text style={styles.textTitle}>{'Bienvenido de vuelta!'}</Text>
                <Text style={styles.textDescription}>{'Ruben Rodriguez'}</Text>
            </View>
            <View style={styles.sectionCard}>
                <Text style={{ ...styles.textTitle, color: '#9E9C9D' }}>
                    {'Tus puntos'.toUpperCase()}
                </Text>
                <View style={styles.alignViewInCenter}>
                    <View style={styles.card}>
                        <View style={{ margin: 20 }}>
                            <Text
                                style={{
                                    ...styles.textTitle,
                                    color: '#fff',
                                    fontSize: 10,
                                }}>
                                {'Tus puntos'.toUpperCase()}
                            </Text>
                            <View style={{ alignSelf: 'center', marginTop: 10 }}>
                                <Text style={{ ...styles.textPoints, color: '#fff' }}>
                                    {'10,00.00 pts'}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.sectionProducts}>
                <Text style={{ ...styles.textTitle, color: '#9E9C9D' }}>
                    {'Tus movimientos'.toUpperCase()}
                </Text>
                <FlatList
                    data={products}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.sectionButton}>
                {isSelected ? (
                    <View style={{ ...styles.containerButton }}>
                        <TouchableOpacity onPress={loadProducts}>
                            <Text style={{ ...styles.textDescription, color: '#fff' }}>
                                {'Todos'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <TouchableOpacity onPress={loadOnlyPositive}>
                            <View style={styles.containerButton}>
                                <Text
                                    style={{
                                        ...styles.textDescription,
                                        color: '#fff',
                                    }}>
                                    {'Ganados'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={loadOnlyNegative}>
                            <View style={styles.containerButton}>
                                <Text
                                    style={{
                                        ...styles.textDescription,
                                        color: '#fff',
                                    }}>
                                    {'Canjeados'}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </View>
    )
}
