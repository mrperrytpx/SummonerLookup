// Contexts
import LoggedInContextProvider from "./LoggedInContext";
import TokenContextProvider from "./TokenContext";
import AuthContextProvider from "./AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "../misc/theme";

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

export default function AppProviders({ children }) {
	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<AuthContextProvider>
					<LoggedInContextProvider>
						<TokenContextProvider >
							{children}
						</TokenContextProvider>
					</LoggedInContextProvider>
				</AuthContextProvider>
			</QueryClientProvider>
		</ThemeProvider>
	);
}