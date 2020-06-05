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
                <div className="box-text-background-header">
                    <col1>Admin Panel</col1>
                </div>
                <RegistrationConfirm/>
                <Statistic/>
                <AddBook/>
            </div>
        )
    }
}
export default AdminPanel;
