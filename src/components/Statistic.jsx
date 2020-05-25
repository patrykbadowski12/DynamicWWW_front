import React from 'react';

class Statistic extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: ''
        }
    }
    render() {

        return (
            <div>
                <h1>Statistic</h1>
            </div>
        )
    }
}
export default Statistic;
