import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { Colors } from '../constants/Colors';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const { signIn } = useAuth();
  const router = useRouter();

  const handleLogin = () => {
    if (name.trim()) {
      signIn(name);
      router.replace('/(tabs)/stopwatch' as any); // Navigate to the tabs after login
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SYSTEM ACCESS</Text>
      <TextInput
        style={styles.input}
        placeholder="IDENTITY"
        placeholderTextColor={Colors.textDim}
        value={name}
        onChangeText={setName}
        autoCapitalize="characters"
      />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>CONNECT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background, justifyContent: 'center', alignItems: 'center' },
  title: { color: Colors.primary, fontSize: 32, fontWeight: 'bold', letterSpacing: 4, marginBottom: 40 },
  input: { 
    width: '80%', backgroundColor: Colors.surface, borderBottomWidth: 2, 
    borderColor: Colors.primary, color: Colors.text, fontSize: 24, 
    textAlign: 'center', marginBottom: 30, padding: 10, fontFamily: 'monospace' 
  },
  btn: { backgroundColor: Colors.primary, paddingHorizontal: 40, paddingVertical: 15 },
  btnText: { color: '#000', fontWeight: 'bold', fontSize: 16, letterSpacing: 2 }
});

