import { AppTheme } from '@assets/theme/themes';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FilterScreen from '@screens/Filter/FilterScreen';
import MovieDetailScreen from '@screens/MovieDetail/MovieDetailScreen';
import { BottomTabs } from './BottomTab';
import { RootStackParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <NavigationContainer theme={AppTheme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
      >
        <Stack.Screen name="Tabs" component={BottomTabs} />
        <Stack.Screen
          name="MovieDetail"
          component={MovieDetailScreen}
          options={{ presentation: 'formSheet' }}
        />
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ presentation: 'formSheet' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export { RootStack };
