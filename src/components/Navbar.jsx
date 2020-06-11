import React from 'react';
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
    localStorage.clear();
}

    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center bg-info ">
                    <li className="nav-item " >
                        <Link to="/dashboard"> <button className="nav-link   btn-secondary ">Main</button> </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/books"> <button className="nav-link  btn-secondary ">Books</button> </Link>
                    </li>
                    <li className="nav-item" >
                        <Link to="/encyclopedies"> <button className="nav-link  btn-secondary">Encyclopedia </button> </Link>
                    </li>
                    {this.state.userRole === 'ADMIN' ?  <li className="nav-item  btn-secondary" >
                        <Link to="/admin"> <button className="nav-link">Admin</button> </Link>
                    </li> : null }
                    <li className="nav-item" >
                        <Link to="/login"> <button className="nav-link  btn-secondary" onClick={this.logout}>Logout</button> </Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default Navbar;
