import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    spacer: {
        height: 50
    },
});

// This is the right space on my iPhone 14 Pro - we may need to update this number by device, or there may be a better way to do this.

export default function StatusBarSpacer() {
    return <View style={styles.spacer} />
}