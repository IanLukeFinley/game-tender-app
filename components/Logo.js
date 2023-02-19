import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
    logoText: {
        textAlign: 'center',
        fontSize: 34,
        fontWeight: '600',
        letterSpacing: -2,
        color: '#b82de2',
    },
});

export default function Logo(props) {
    return <Text style={styles.logoText}>{props.name}</Text>
}