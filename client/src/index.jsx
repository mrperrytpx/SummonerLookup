import React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './styles/index.css';

import App from './App';
import ContextProviders from "./contexts/ContextProviders";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<ContextProviders>
			<App />
		</ContextProviders>
	</BrowserRouter>
	// </React.StrictMode>

);