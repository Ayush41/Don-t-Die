import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';

export default function Index() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace('/(tabs)/stopwatch' as any);
    } else {
      router.replace('/login' as any);
    }
  }, [user, router]);

  return null;
}

