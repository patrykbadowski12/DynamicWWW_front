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
<<<<<<< Updated upstream
            <div className="box-text-background-header-admin">
                <col2>Statistic</col2>
=======
            <div>
                <h4>Tu bedo statystyki</h4>
                <form>
                    <div className="form-row">
                        <div className="col">
                            <label>start date</label>
                            <input type="text" className="form-control"  value={this.state.startDate} onChange={this.handleStartDate}/>
                        </div>
                        <div className="col">
                            <label>end date</label>
                            <input type="text" className="form-control" value={this.state.endDate} onChange={this.handleEndDate}/>
                        </div>
                    </div>
                    <button onClick={this.fetchStatistics}> Confirm</button>
                </form>
                {this.state.bookStatistic.length !== 0 ? 
                <div>
                     {Object.keys(this.state.bookStatistic).map((keyname, i) => 
                        <h1 key={i}>{keyname} {this.state.bookStatistic[keyname].length}</h1>)}
                </div> : null}
>>>>>>> Stashed changes
            </div>
        )
    }
}
export default Statistic;
