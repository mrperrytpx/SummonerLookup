import LeagueVersionContextProvider from "./LeagueVersionContext";
import LoggedInContextProvider from "./LoggedInContext";
import TokenContextProvider from "./TokenContext";

// React-query Cache
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

const queryCache = new QueryCache();
const queryClient = new QueryClient({ queryCache });

export default function ContextProviders({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <LoggedInContextProvider>
                <TokenContextProvider >
                    <LeagueVersionContextProvider>
                        {children}
                    </LeagueVersionContextProvider>
                </TokenContextProvider>
            </LoggedInContextProvider>
        </QueryClientProvider>
    );
}