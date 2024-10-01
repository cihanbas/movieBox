import { colors } from '@assets/theme/Colors';
import NetInfo from '@react-native-community/netinfo';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { Alert, LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { RootStack } from 'src/navigation/MainNavigation';
import { persistor, store } from 'src/store/store';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);
export default function App() {
  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      Alert.alert('Network issue', 'Please check your internet connection', [
        {
          text: 'Got it',
        },
      ]);
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar backgroundColor={colors.background} style="light" />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootStack />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
}
