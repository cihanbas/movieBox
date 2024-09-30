import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RootStack } from 'src/navigation/MainNavigation';
const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RootStack />
    </QueryClientProvider>
  );
}
