import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client/react'

import './index.css'
import App from './App'
import client from './apollo'

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
)
