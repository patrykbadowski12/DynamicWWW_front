import React from 'react';
import { Redirect } from 'react-router-dom'

class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: '',
            responseStatus: 0,
            response: {}
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.login = this.login.bind(this);

    }

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    login(event) {

        event.preventDefault();
        var url = 'http://localhost:8080/register';
        var data = {
            username: this.state.username,
            password: this.state.password
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            if (response.ok) {
                this.setState({ responseStatus: response.status });
                return response.json()
            } else {
                throw new Error('Error with register');
            }
        })
            .then(data => {
                console.log(data);
                this.setState({ responseStatus: data.status });
            })
            .catch((error) => {
                console.log(error)
            });;
    }



    render() {
        if (this.state.responseStatus === 200) {
            return <Redirect to='/login' />;
        }
        return (
            <div>
                <div>
                    <h1>{this.state.token}</h1>
                    <section className="login-block">
                        <div className="container">
                            <div className="row ">
                                <div className="col login-sec">
                                    <h2 className="text-center">Register</h2>
                                    <form className="login-form">
                                        <div className="form-group">
                                            <label className="text-uppercase">Username</label>
                                            <input type="text" value={this.state.username} className="form-control" onChange={this.handleUsername} />
                                            <label className="text-uppercase">Password</label>
                                            <input type="text" value={this.state.password} className="form-control" onChange={this.handlePassword} />
                                            <input type="submit" value="Register Account" className="btn btn-primary btn-login float-right" onClick={this.login} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default Register;
