import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter, syncHistoryWithStore } from 'react-router-redux';
import { BrowserHistory } from 'react-router-dom';

import store, { history } from 'redux/store.js';

import 'styles/main.css';
import App from 'containers/App/App';
import registerServiceWorker from './registerServiceWorker';

const target = document.getElementById('root');
const html = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<div>
				<App />
			</div>
		</ConnectedRouter>
	</Provider>
);

ReactDOM.render(html, target);

registerServiceWorker();
