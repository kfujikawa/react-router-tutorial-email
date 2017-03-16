import React from 'react'
import { Link } from 'react-router'

/* Renders when localhost:8080/#/spam is visited*/

// export default React.createClass({
//   render() {
//     return <div>This should show the titles of the Spam emails as links</div>
//   }
// })

export default React.createClass({
  render(props) {
    return (
      <div>
        <h2>Spam</h2>

        <ul>
          <li><Link to="/spam/message">Spam Title Goes Here</Link></li>
        </ul>

      </div>
    )
  }
})
