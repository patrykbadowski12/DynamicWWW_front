import React from 'react';
import fetch from 'isomorphic-fetch';
import {Link } from 'react-router-dom';



class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: ''
        }
    }

    componentDidMount() {
        this.fetchUserData();
    }

    fetchUserData() {
        var url = 'http://localhost:8080/user?username=' + this.state.username;
        var bearer = 'Bearer ' + this.state.token;
        console.log(bearer)
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
                this.setState({ userRole: data.role });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });
    }



    render() {

        return (
            <div>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item" >
                        <Link to="/dashboard" className="nav-link">Main</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/books" className="nav-link">Books</Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/encyclopedia" className="nav-link">Encyclopedia</Link>
                    </li>
                </ul>
                <h1>Dashboard</h1>
                <div id="dashboard"></div>
            </div>
        )
    }
}
export default Dashboard;
