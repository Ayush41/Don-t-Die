import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { Colors } from '../../constants/Colors';

export default function SystemScreen() {
  const { signOut, user } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    signOut();
    router.replace('/login' as any);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.user}>USER: {user}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleLogout}>
        <Text style={styles.btnText}>DISCONNECT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center' },
  user: { color: Colors.text, fontSize: 20, marginBottom: 30, fontFamily: 'monospace' },
  btn: { borderColor: Colors.primary, borderWidth: 1, padding: 15 },
  btnText: { color: Colors.primary, fontFamily: 'monospace' }
});
