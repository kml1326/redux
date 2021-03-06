import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from './components/Login';
import Signup from './components/Signup';
import CreatePost from './components/CreatePost';
import Posts from './components/Posts';
import { Provider } from 'react-redux';
import store from './store';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';


ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Navbar />
				<Switch>
					<Route path='/' component={Dashboard} exact />
					<Route path='/signup' component={Signup} />
					<Route path='/login' component={Login} />
					<Route path='/create' component={CreatePost} />
					<Route path='/posts' component={Posts} />
				</Switch>
			</div>
		</Router>
	</Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
