import React from 'react';
import LoginStyle from "../scss/LoginStyle.scss"

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
            
            <div className="box-text-background">

                <col1> Welcome to our Library </col1>

            </div> 
        )
    }
}
export default Dashboard;
