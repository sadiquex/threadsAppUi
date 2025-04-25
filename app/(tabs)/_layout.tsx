import { Entypo, FontAwesome } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';

import { HeaderButton } from '../../components/HeaderButton';
import { TabBarIcon } from '../../components/TabBarIcon';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => <Entypo name="home" color={color} size={size} />,
          headerShown: false,
          headerRight: () => (
            <Link href="/modal" asChild>
              <HeaderButton />
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="magnifying-glass" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="create"
        options={{
          title: 'Create',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => <Entypo name="plus" color={color} size={size} />,
          headerShown: false,
          tabBarIconStyle: {
            backgroundColor: '#f1f5f9',
            borderRadius: 8,
            width: 48,
            // marginTop: 4,
          },
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart-outlined" color={color} size={size} />
          ),
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <FontAwesome name="user" color={color} size={size} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
