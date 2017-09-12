import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import store, { history } from 'redux/store'

import 'styles/main.css';
import App from 'containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');
const html   = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>
)

ReactDOM.render(html, target);

registerServiceWorker();
