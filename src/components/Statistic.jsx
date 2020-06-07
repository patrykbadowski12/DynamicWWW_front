import React from 'react';

class Statistic extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: '',
            bookStatistic: [],
            startDate: '',
            endDate: '',
        }
        this.fetchStatistics = this.fetchStatistics.bind(this);
        this.handleStartDate = this.handleStartDate.bind(this);
        this.handleEndDate = this.handleEndDate.bind(this);
    }

    handleStartDate(event) {
        this.setState({startDate: event.target.value});
        console.log(this.state.startDate)
    }

    handleEndDate(event) {
        this.setState({endDate: event.target.value});
        console.log(this.state.endDate)
    }

    fetchStatistics() {
        console.log(this.state.endDate);
        var url = 'http://localhost:8080/admin/book/statistic?startDate=' + this.state.startDate + '&endDate=' + this.state.endDate;
        var bearer = 'Bearer ' + this.state.token;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': bearer,
            },
            body: null
        }).then((response) => {
            if (response.ok) {
                return response.json()
            } else {
                throw new Error('Error during fetch user data - response to ');
            }
        })
            .then(data => {
                this.setState({ bookStatistic: data });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });
    }

    render() {
        console.log(this.state.bookStatistic);
        return (
            <div>
            
            <div>
                
                <form className="box-container-admin-statistic">
                    <div className="form-row">
                        <div className="col">
                            <label>Start date</label>
                            <input placeholder="YYYY-MM" type="text" className="form-control"  value={this.state.startDate} onChange={this.handleStartDate}/>
                        </div>
                        <div className="col">
                            <label>End date</label>
                            <input placeholder="YYYY-MM" type="text" className="form-control" value={this.state.endDate} onChange={this.handleEndDate}/>
                        </div>
                    </div>
                    <button className="btn btn-secondary btn-login float-right" type='submit' onClick={this.fetchStatistics}>Confirm</button>
                </form>
                <col3>Statistics will be displayed here</col3>
                <div className="table-margin4">
                    
                {this.state.bookStatistic.length !== 0 ? 
                <table className="table table-striped table-dark ">
                <thead className="thead-dark">
            <tr>
                <th scope="col">Date</th>
                <th scope="col" >Number of books</th>
            </tr>
            </thead>
            <tbody> 
                    {Object.keys(this.state.bookStatistic).map((keyname, i) => 
                        <tr key={i}>
                            <th>{keyname} </th>
                            <th>{this.state.bookStatistic[keyname].length}</th>
                        </tr>)}
                    </tbody>
                </table>
                : null}
                
                </div>
                </div>
            </div>
        )
    }
}
export default Statistic;
