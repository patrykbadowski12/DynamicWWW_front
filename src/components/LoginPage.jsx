import React from 'react';
import { Redirect, Link } from 'react-router-dom'

class LoginPage extends React.Component {

    constructor(){
        super();
        this.state = {
          username: '',
          password: '',
          token: '',
          responseStatus: 0,
          response : {}
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.login = this.login.bind(this);
        
    }

    handleUsername(event){
        this.setState({username: event.target.value});
    }
    
    handlePassword(event){
        this.setState({password: event.target.value});
        }

    login(event) {

        event.preventDefault();
        var url = 'http://localhost:8080/authenticate';
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
                throw new Error('Error with login');
            }
        })
            .then(data  => {
                this.setState({token: data.token});
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', this.state.username);
            }
        )
        .catch((error) => {
            console.log(error)
        });
    }

    render(){
        if (this.state.token !== undefined && this.state.token.length !== 0) {
            console.log("redirect")
            return <Redirect to='/dashboard' />;
        }
    return (
        <div>
            <div>
                <Link to="/register">register</Link>
                <section className="login-block">
                    <div className="container">
                        <div className="row ">
                            <div className="col login-sec">
                                <h2 className="text-center">Login Now</h2>
                                <form className="login-form">
                                    <div className="form-group">
                                        <label className="text-uppercase">Username</label>
                                        <input type="text" value= {this.state.username} className="form-control" onChange= {this.handleUsername}/>
                                        <label className="text-uppercase">Password</label>
                                        <input type="text" value= {this.state.password} className="form-control" onChange= {this.handlePassword}/>
                                        <input type="submit" value="Log in" className="btn btn-primary btn-login float-right" onClick = {this.login}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )}
}
export default LoginPage;
