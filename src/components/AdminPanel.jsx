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
<<<<<<< Updated upstream
                <div className="box-text-background-header">
                    <col1>Admin Panel</col1>
                </div>
                <RegistrationConfirm/>
                <Statistic/>
                <AddBook/>
=======
                <h1>Admin Panel</h1>
                <h3 onClick={this.shouldShowRegistrationConfirm}>Confirm registration</h3>
                {this.state.registrationConfirm ? <RegistrationConfirm/> : null}
                <h3 onClick={this.shouldShowStatistics}>Statistics</h3>
                {this.state.statistics ? <Statistic/> : null}
                <h3 onClick={this.shouldShowAddBooks}>Add Book</h3>
                {this.state.addBook ? <AddBook/> : null}
                <h3 onClick={this.shouldShowDeleteData}>deleteData</h3>
                {this.state.deleteData ? <DeleteData/> : null}
>>>>>>> Stashed changes
            </div>
        )
    }
}
export default AdminPanel;
