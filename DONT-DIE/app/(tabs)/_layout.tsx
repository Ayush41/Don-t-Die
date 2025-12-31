import { Tabs } from 'expo-router';
import { Colors } from '../../constants/Colors';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textDim,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
        },
      }}>
      <Tabs.Screen
        name="stopwatch"
        options={{
          title: 'Stopwatch',
          tabBarLabelStyle: { fontFamily: 'monospace' },
        }}
      />
      <Tabs.Screen
        name="dont-die"
        options={{
          title: "Don't Die",
          tabBarLabelStyle: { fontFamily: 'monospace' },
        }}
      />
      <Tabs.Screen
        name="system"
        options={{
          title: 'System',
          tabBarLabelStyle: { fontFamily: 'monospace' },
        }}
      />
    </Tabs>
  );
}
