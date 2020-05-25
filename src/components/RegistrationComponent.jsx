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
    }

    deleteRegistration() {
        console.log("Delete");
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
