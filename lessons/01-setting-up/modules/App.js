import React from 'react'
import {Link} from 'react-router'

/* Renders when localhost:8080/#/ is visited*/

export default React.createClass({
  render() {
    return (
    	<div>
    		<h1>Email Inbox</h1>
    		<ul role="nav">
    			<li><Link to="/inbox">Inbox</Link></li>
    			<li><Link to="/spam">Spam</Link></li>
    		</ul>

    		{/* Because the route path in index.js is nested this is now available */}
    		{this.props.children}

    	</div>
    )
  }
})
