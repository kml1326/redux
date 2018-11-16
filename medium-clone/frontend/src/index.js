import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import Signup from './components/Signup';
import ArticleEditor from './components/ArticleEditor';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/' component={App} exact />
				<Route path='/signup' component={Signup} />
				<Route path='/login' component={Login} />
				<Route path='/article' component={ArticleEditor} />
				<Route path='/posts' component={Posts} />
			</Switch>
		</Router>
	</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
