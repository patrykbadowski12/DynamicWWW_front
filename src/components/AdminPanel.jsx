import React from 'react';
import RegistrationConfirm from './RegistrationConfirm';
import Statistic from './Statistic';
import AddBook from './AddBook';

class AdminPanel extends React.Component {

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
                <h1>Admin Panel</h1>
                <RegistrationConfirm/>
                <Statistic/>
                <AddBook/>
            </div>
        )
    }
}
export default AdminPanel;
