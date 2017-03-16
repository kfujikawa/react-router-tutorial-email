import React from 'react'
import { Link } from 'react-router'

/* Renders when localhost:8080/#/inbox is visited*/

// export default React.createClass({
//   render() {
//     return <div>This should show the titles of the Inbox emails as links</div>
//   }
// })

// export default React.createClass({
//   render() {
//     return (
//       <div>
//         <h2>{this.props.params.emails}</h2>
//       </div>
//     )
//   }
// })

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>

        {/* add some links */}
        <ul>
          <li><Link to="/inbox/message">Inbox Title Goes Here</Link></li>
        </ul>

      </div>
    )
  }
})