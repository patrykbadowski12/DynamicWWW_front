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
            <div>
                <a scope='row'>{this.props.index+1}</a>
                <div>
                    <a>{this.props.registration.author}</a>
                    <a>{this.props.registration.content}</a>
                    <a>{this.props.registration.date}</a>
                    <button onClick={this.confirmRegistration}>Confirm</button>
                    <button onClick={this.deleteRegistration}>Delete</button>
                </div>}
                
            </div>
        )
    }
}
export default RegistrationComponent;
