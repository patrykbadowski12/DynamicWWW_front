import React from 'react';
import fetch from 'isomorphic-fetch';
import {Link } from 'react-router-dom';

class Navbar extends React.Component {
    
  constructor() {
    super();

    this.state = {
      userRole: localStorage.getItem('userRole'),
    };

    this.logout = this.logout.bind(this);
  }

  logout(){
    var url = 'http://localhost:8080/logout';
    fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if (response.ok) {
            this.setState({ responseStatus: response.status });
            return response.json()
        } else {
            throw new Error('Error with logout');
        }
    })
        .then(()  => {
            localStorage.setItem('isLogged', false);
        }
    )
    .catch((error) => {
        console.log(error)
    });
}

    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center">
                    <li className="nav-item" >
                        <Link to="/dashboard"> <button className="nav-link">Main</button> </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/books"> <button className="nav-link">Books</button> </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/encyclopedies"> <button className="nav-link">Encyclopedia </button> </Link>
                    </li>
                    {this.state.userRole === 'ADMIN' ?  <li className="nav-item" >
                        <Link to="/admin"> <button className="nav-link">Admin</button> </Link>
                    </li> : null }
                    <li className="nav-item" >
                        <Link to="/login"> <button className="nav-link" onClick={this.logout}>Logout</button> </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Navbar;
