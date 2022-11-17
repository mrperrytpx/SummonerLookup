import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import AppProviders from "./contexts/AppProviders";

import { ReactQueryDevtools } from "react-query/devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<BrowserRouter>
		<AppProviders>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</AppProviders>
	</BrowserRouter>
);