import React from 'react';
import LoginStyle from "../scss/LoginStyle.scss"
import fontello from "../icons/css/fontello.css"
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

    submitLogin(e){
        
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
                localStorage.setItem('isLogged', true);
            }
        )
        .catch((error) => {
            console.log(error)
        });
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
                localStorage.setItem('userRole', data.role);
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });
    }

    render(){
        
        if (this.state.token !== undefined && this.state.token.length !== 0) {
            this.fetchUserData();
            console.log("redirect")
            return <Redirect to='/dashboard' />;
        }
    return (


        <div>
            <div>
                <section className="login-block">
                    <div className="root-container">
                        <div className="box-container">
                            <div className="row ">
                                <div className="col login-sec">
                                    <h2 className="text-center">Login Now</h2>
                                    <form className="login-form" >
                                        <div className="form-group">
                                            <label className="text-uppercase">Username</label>
                                            <input type="text" placeholder="username" value={this.state.username} className="form-control" onChange={this.handleUsername} />
                                            <label className="text-uppercase">Password</label>
                                            <input type="password" placeholder="password" value={this.state.password} className="form-control" onChange={this.handlePassword} />
                                            <input type="submit" value="Log in" className="btn btn-secondary btn-login float-right" onClick={this.login} />
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
                        <Link to="/register">
                            <input type="submit" value="Register" className="btn btn-success btn-register float-right btn-lg" />
                        </Link>
                    </div>
                </section>
            </div>
            <div className="socials">
                <div className="social-divs">
                    <div> 
                        <a href="https://www.facebook.com" target="_blank" >
                            <div className="fb">
                                <i class="icon-facebook"></i>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com" target="_blank" >
                            <div className="yt">
                                <i class="icon-youtube"></i>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/explore" target="_blank" >
                            <div className="tw">
                                <i class="icon-twitter"></i>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://myaccount.google.com" target="_blank" >
                            <div className="gplus">
                                <i class="icon-gplus"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )}
}
export default LoginPage;
