import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function StopwatchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>STOPWATCH</Text>
      <Text style={styles.sub}>[UNDER CONSTRUCTION]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center' },
  text: { color: Colors.text, fontSize: 30, fontFamily: 'monospace' },
  sub: { color: Colors.textDim, marginTop: 10, fontFamily: 'monospace' }
});