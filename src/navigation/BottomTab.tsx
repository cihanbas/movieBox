import { Heart, Home, Search, User } from '@assets/icons/Icons';
import { colors } from '@assets/theme/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home/HomeScreen';
import { TabParamList } from './types';
const Tab = createBottomTabNavigator<TabParamList>();

export function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopWidth: 0,
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon({ color }) {
            return <Home color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon({ color }) {
            return <Search color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarIcon({ color }) {
            return <Heart color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon({ color }) {
            return <User color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
