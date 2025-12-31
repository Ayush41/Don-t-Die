import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function DontDieScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DON&apos;T DIE</Text>
      <Text style={styles.sub}>TIMER READY</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center' },
  text: { color: Colors.primary, fontSize: 40, fontWeight: 'bold', fontFamily: 'monospace' },
  sub: { color: Colors.textDim, marginTop: 10, fontFamily: 'monospace' }
});
