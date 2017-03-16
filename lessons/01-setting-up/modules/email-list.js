import React from 'react';
import Email from  './email';

export default function ContactList(props) {
    console.log(props.emails);
    const emails = Object.keys(props.emails).map((contactId, index) => {
        const email = props.emails[contactId];
        return (
            <li key={index}>
                <Email id={email.id} title={email.title}/>
            </li>
        );
    });

    return (
        <ul>
            {emails}
        </ul>
    );
};