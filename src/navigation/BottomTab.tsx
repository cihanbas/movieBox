import { Heart, Home, Search } from '@assets/icons/Icons';
import { colors } from '@assets/theme/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FavoritesScreen from '@screens/Favorites/FavoritesScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import SearchScreen from '@screens/Search/SearchScreen';
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
        tabBarInactiveTintColor: colors.card,
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
        component={SearchScreen}
        options={{
          tabBarIcon({ color }) {
            return <Search color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarIcon({ color }) {
            return <Heart color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
