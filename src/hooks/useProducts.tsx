import { useEffect, useState } from 'react'
import { productsApi } from '../api/serviceApi'
import type { ProductsInterface } from '../interfaces/productsInterface'

export const useProducts = () => {
    const [isLoading, setisLoading] = useState(true)
    const [products, setProducts] = useState<ProductsInterface[]>({} as ProductsInterface[])
    const [isSelected, setIsSelected] = useState(false)

    const loadProducts = async () => {
        const resp = await productsApi.get<ProductsInterface>(
            'https://6222994f666291106a29f999.mockapi.io/api/v1/products'
        )
        setProducts(resp.data)
        setisLoading(false)
        setIsSelected(false)
    }

    const loadOnlyPositive = () => {
        setIsSelected(true)
        setProducts(products.filter((product) => product.is_redemption))
    }
    const loadOnlyNegative = () => {
        setIsSelected(true)
        setProducts(products.filter((product) => !product.is_redemption))
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return {
        isLoading,
        products,
        loadOnlyPositive,
        loadOnlyNegative,
        isSelected,
        loadProducts,
    }
}
