import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import App from './modules/app'
import Inbox from './modules/inbox'
import Spam from './modules/spam'
// import EmailListContainer from './modules/email-list-container'


render((
	<Router history={hashHistory}>

	{/* localhost:8080/#/ load App.js*/}
	<Route path="/" component={App}>

    	{/* localhost:8080/#/inbox load Inbox.js*/}
    	<Route path="/inbox" component={Inbox}/>
		{/* localhost:8080/#/spam load Spam.js*/}
    	<Route path="/spam" component={Spam}/>

    </Route>

	</Router>
), document.getElementById('app'))