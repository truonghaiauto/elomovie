import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    banner: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    box: {
        flex: 0.85,
        height: '100%',
        width: '100%',
    },
    box1: {
        alignSelf: 'flex-start',
        width: '49.5%',
        flex: 1,
        backgroundColor: '#ff7200'
    },
    progressbar: {
        color: '#000',
        fontSize: 50,
        left: '220%',
        top: '70%'
    }
});

export default styles;