import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./Context/ContextData";
import RouterWrapper from "./router/Router"; // Import RouterWrapper

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <RouterWrapper />
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
