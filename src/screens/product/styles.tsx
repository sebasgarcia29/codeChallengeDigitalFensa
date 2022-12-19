import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D0D5FE',
    },
    allContainer: {
        flex: 2,
        backgroundColor: 'white',
    },
    containerCard: {
        flex: 1,
        marginHorizontal: 20,
    },
    sectionImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: 'white',
        width: '80%',
        height: '80%',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    tinyLogo: {
        width: '70%',
        height: '100%',
    },
    containerImage: {
        marginVertical: 20,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    textTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 50,
        color: '#BCBBBB',
        marginHorizontal: 10,
        marginVertical: -30,
    },
    textDescription: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 50,
        marginHorizontal: 10,
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
    textButton: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    textTitleTop: { fontSize: 20, fontWeight: 'bold' },
    containerTextProduct: { flex: 1, backgroundColor: 'white', marginVertical: -20 },
    containerButton2: { flex: 1, backgroundColor: 'white' },
})
