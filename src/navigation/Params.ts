import type { PageName } from './PageName'

export type Params = {
    goBack: any
    navigate: any
    push: any
    [PageName.HomeScreen]: undefined
    [PageName.ProductScreen]: {
        createdAt: string
        product: string
        points: number
        image: string
        is_redemption: boolean
        id: string
    }
}

// Add Params to React Navigation namespace to be able to get it from anywhere
declare global {
    namespace ReactNavigation {
        interface RootParamList extends Params { }
    }
}
