import React from 'react';
import RegistrationConfirm from './RegistrationConfirm';
import Statistic from './Statistic';
import AddBook from './AddBook';
import DeleteData from './DeleteData';

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            registrationConfirm: false,
            statistics: false,
            addBook: false,
            deleteData: false
        }
        this.shouldShowRegistrationConfirm = this.shouldShowRegistrationConfirm.bind(this);
        this.shouldShowStatistics = this.shouldShowStatistics.bind(this);
        this.shouldShowAddBooks = this.shouldShowAddBooks.bind(this);
        this.shouldShowDeleteData = this.shouldShowDeleteData.bind(this);
    }

    shouldShowRegistrationConfirm(event) {
        this.setState({registrationConfirm: !this.state.registrationConfirm});
    }

    shouldShowStatistics(event) {
        this.setState({statistics: !this.state.statistics});
    }

    shouldShowAddBooks(event) {
        this.setState({addBook: !this.state.addBook});
    }

    shouldShowDeleteData(event) {
        this.setState({deleteData: !this.state.deleteData});
    }

    render() {

        return (
            <div>
                <div className="box-text-background-header">
                    <col1>Admin Panel</col1>
                </div>

                <div className="box-text-background-header-admin" onClick={this.shouldShowRegistrationConfirm} >
                    <col2>Registration Confirm</col2>
                </div>
                {this.state.registrationConfirm ? <RegistrationConfirm/> : null}

                <div className="box-text-background-header-admin" onClick={this.shouldShowStatistics} >
                    <col2>Statistic</col2>
                </div>
                {this.state.statistics ? <Statistic/> : null}

                <div className="box-text-background-header-admin-addbook" onClick={this.shouldShowAddBooks}>
                    <col2>AddBook</col2>
                </div>
                {this.state.addBook ? <AddBook/> : null}

                <div className="box-text-background-header-admin" onClick={this.shouldShowDeleteData} >
                    <col2>DeleteData</col2>
                </div>
                {this.state.deleteData ? <DeleteData/> : null}
            </div>
        )
    }
}
export default AdminPanel;
