import { StyleSheet } from 'react-native';

const taskStyles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    itemRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemText: {
        maxWidth: '80%',
    },
    remove: {
        width: 24,
        height: 24,
        backgroundColor: '#ff1e00',
        borderRadius: 5,
    },
    amazon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        width: 24,
        height: 24,
        // opacity: 0.4,
        backgroundColor: '#00a2ff',
        borderRadius: 5,
    },
    grofers: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        width: 24,
        height: 24,
        // opacity: 0.4,
        backgroundColor: '#ffb300',
        borderRadius: 5,
    },
    flipkart: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        width: 24,
        height: 24,
        // opacity: 0.4,
        backgroundColor: '#e8e82a',
        borderRadius: 5,
    }
});

export default taskStyles