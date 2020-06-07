import React from 'react';


class RegistrationComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: ''
        }
        this.confirmRegistration = this.confirmRegistration.bind(this);
        this.deleteRegistration = this.deleteRegistration.bind(this);
    }

    confirmRegistration() {
        console.log("Confirm");
        console.log(this.props.registration.id);
        var url = 'http://localhost:8080/admin/registration/confirm/' + this.props.registration.id;
        var bearer = 'Bearer ' + this.state.token;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': bearer,
            },
            body: null
        }).then((response) => {
            if (response.ok) {
                console.log("Udało się");
            } else {
                throw new Error('Error during fetch user data - response to ');
            }
        })
            .then(data => {
                this.setState({ registration: data });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });

    }

    deleteRegistration() {
        var url = 'http://localhost:8080/admin/registration/delete/' + this.props.registration.id + '/?';
        var bearer = 'Bearer ' + this.state.token;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': bearer,
            },
            body: null
        }).then((response) => {
            if (response.ok) {
            } else {
                throw new Error('Error during fetch user data - response to ');
            }
        })
            .then(data => {
                this.setState({ registration: data });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });

    }

    render() {

        return (
            <table className="table table-striped table-dark ">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col" >Login</th>
                        <th scope="col">Text area</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Confirm</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody>  
                <th scope='row'>{this.props.index+1}</th>
                
                    <th>{this.props.registration.author}</th>
                    <th>{this.props.registration.content}</th>
                    <th>{this.props.registration.date}</th>
                    <th><button className="btn btn-success btn-login float-right" type='submit' onClick={this.confirmRegistration}>Confirm</button></th>
                    <th><button className="btn btn-danger btn-login float-right" type='submit' onClick={this.deleteRegistration}>Delete</button></th>
                
            </tbody>
            </table>
        )
    }
}
export default RegistrationComponent;
