import React from 'react';

class Dashboard extends React.Component {

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
                <h1>Dashboard</h1>
            </div>
        )
    }
}
export default Dashboard;