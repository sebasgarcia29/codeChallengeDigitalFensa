import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        marginHorizontal: 20,
    },
    alignViewInCenter: {
        marginTop: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
    sectionTitle: {
        flex: 1,
    },
    sectionCard: {
        flex: 2,
    },
    sectionProducts: {
        flex: 4,
        backgroundColor: 'white',
    },
    sectionButton: {
        flex: 1,
        flexDirection: 'row',
    },
    textTitle: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#000',
    },
    textDescription: {
        fontSize: 14,
        color: '#424242',
    },
    card: {
        width: '80%',
        height: '80%',
        backgroundColor: '#3E4FF2',
        borderRadius: 25,
    },
    textPoints: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
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
    containerButton: {
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3F50F6',
        height: '40%',
        width: '90%',
        margin: 20,
        paddingHorizontal: 30,
        borderRadius: 12,
    },
})
