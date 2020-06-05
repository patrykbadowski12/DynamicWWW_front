import React from 'react';
import fetch from 'isomorphic-fetch';
import AddRegistration from './AddRegistration';

class Encyclopedia extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: localStorage.getItem('userRole'),
            encyclopedies: [],
        }
        this.encyclopediaDetails = this.encyclopediaDetails.bind(this);
    }

    
    componentDidMount() {
        this.fetchEncyclopedies();
    }

    fetchEncyclopedies() {
        var url = 'http://localhost:8080/encyclopedies';
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
                this.setState({ encyclopedies: data });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });
    }

    encyclopediaDetails(id) {
        this.props.history.push("/encyclopedia/" + id);
    }

    render() {

        return (
            <div>
                <div className="box-text-background-header">
                    <col1>Encyclopedia</col1>
                </div>
                < AddRegistration encyclopedies={this.state.encyclopedies} />
                {this.state.encyclopedies.length !== 0 ?
                    <div className="table-margin ">
                        <table className="table table-striped table-dark ">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col" >Title</th>
                                    <th scope="col">Number of posts</th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.encyclopedies.map((item, index) =>
                                    <tr key={index}>
                                        <th scope='row'>{index+1}</th>
                                        <th onClick={ () => this.encyclopediaDetails(item.id)}>{item.title}</th>
                                        <th>{item.registration.length}</th>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                    : <span className="box-text-background-header-book">It's nothing to show</span>}
            </div>
        )
    }
}
export default Encyclopedia;
