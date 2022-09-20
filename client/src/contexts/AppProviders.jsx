// Contexts
import { AuthContextProvider } from "../hooks/useAuth";
import { ThemeProvider } from "styled-components";
import { theme } from "../misc/theme";

// React-query Cache
import { QueryClient, QueryClientProvider, QueryCache } from "react-query";

const queryCache = new QueryCache();
export const queryClient = new QueryClient({
	queryCache,
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

export default function AppProviders({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					{children}
				</AuthContextProvider>
			</QueryClientProvider>
		</ThemeProvider>
	);
}