import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home/HomeScreen';
import { TabParamList } from './types';
import AntDesign from '@expo/vector-icons/AntDesign';
import { colors } from '@assets/theme/Colors';
import { Heart, Home, Search, User } from '@assets/icons/Icons';
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
          tabBarIcon(props) {
            return <Home color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon(props) {
            return <Search color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={HomeScreen}
        options={{
          tabBarIcon(props) {
            return <Heart color={props.color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeScreen}
        options={{
          tabBarIcon(props) {
            return <User color={props.color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
