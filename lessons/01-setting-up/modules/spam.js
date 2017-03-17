import React from 'react'
import { Link } from 'react-router'

/* Renders when localhost:8080/#/inbox is visited*/

export default class Spam extends React.Component {
    constructor(props) {
        super(props);
        this.emails = [
            {
                id: 0,
                title: "Email 1",
            },
            {
                id: 1,
                title: "Email 2"
            }
        ]
    }
    render() {

        const renderedEmails = this.emails.map((email, index) => {
          return (
              <div key={index}>
                
                <Link to={"/inbox/" + email.title}>{email.title}</Link>
              </div>
          )  
        })

        return (
            <div>
                <h1>Spam</h1>
                {renderedEmails}
                {this.props.children}
            </div>
        )
    }
}