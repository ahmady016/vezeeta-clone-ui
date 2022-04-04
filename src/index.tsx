import React from 'react'
import { render } from 'react-dom'

import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { ToastContainer } from 'react-toastify'

import App from './App'

// react toastify styles, global styles
import 'react-toastify/dist/ReactToastify.css'
import './index.scss'

// react router history
export const history = createBrowserHistory()
// react query client
export const queryClient = new QueryClient()

render(
	<QueryClientProvider client={queryClient}>
		<Router history={history}>
			<App />
		</Router>
		<ReactQueryDevtools />
		<ToastContainer newestOnTop />
	</QueryClientProvider>,
	document.getElementById('root')
)
