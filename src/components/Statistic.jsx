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
            <div className="box-text-background-header-admin">
                <col2>Statistic</col2>
            </div>
        )
    }
}
export default Statistic;
