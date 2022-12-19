import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginVertical: 8,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 10,
    },
    positive: {
        color: '#67B642',
    },
    negative: {
        color: '#E4716D',
        fontWeight: 'bold',
        fontSize: 20,
    },
    textTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    textProduct1: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },
    textProduct2: {
        fontSize: 14,
        color: '#000',
    },
    containerPoints: {
        flex: 1,
        flexDirection: 'row-reverse',
        alignSelf: 'flex-end',
    },
})
