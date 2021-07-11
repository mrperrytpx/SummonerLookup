// Contexts
import LoggedInContextProvider from "./LoggedInContext";
import TokenContextProvider from "./TokenContext";

// React-query Cache
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

const queryCache = new QueryCache();
const queryClient = new QueryClient({
    queryCache,
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});

export default function ContextProviders({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <LoggedInContextProvider>
                <TokenContextProvider >
                    {children}
                </TokenContextProvider>
            </LoggedInContextProvider>
        </QueryClientProvider>
    );
}