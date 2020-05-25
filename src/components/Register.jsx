import React from 'react';
import LoginStyle from "../scss/LoginStyle.scss"
import { Redirect, Link } from 'react-router-dom'

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

    submitRegister(e){

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
                    <section className="login-block">
                    <div className="root-container">
                        <div className="box-container">
                            <div className="row ">
                                <div className="col login-sec">
                                    <h2 className="text-center">Register</h2>
                                    <form className="login-form">
                                        <div className="form-group">
                                            <label className="text-uppercase">Username</label>
                                            <input type="text" placeholder="username" value={this.state.username} className="form-control" onChange={this.handleUsername} />
                                            <label className="text-uppercase">Password</label>
                                            <input type="text" placeholder="password" value={this.state.password} className="form-control" onChange={this.handlePassword} />
                                            <input type="submit" value="Register Account" className="btn btn-secondary btn-login float-right" onClick={this.login} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="root-container">
                            <label htmlFor="     "></label>
                    </div>
                    <div className="root-container">
                        <Link to="/login">
                            <input type="submit" value="Login" className="btn btn-success btn-login float-right btn-lg" />
                        </Link>
                    </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default Register;
