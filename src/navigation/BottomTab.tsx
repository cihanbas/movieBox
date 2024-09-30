import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '@screens/Home/HomeScreen';
import { TabParamList } from './types';

const Tab = createBottomTabNavigator<TabParamList>();

export function BottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={HomeScreen} />
      <Tab.Screen name="Profile" component={HomeScreen} />
    </Tab.Navigator>
  );
}
