import React from 'react';
import fetch from 'isomorphic-fetch';

class Encyclopedia extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            books: []
        }
    }

    render() {

        return (
            <div>
                <h1>Encyclopedia</h1>
            </div>
        )
    }
}
export default Encyclopedia;
