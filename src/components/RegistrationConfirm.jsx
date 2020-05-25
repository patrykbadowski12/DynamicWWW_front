import React from 'react';
import RegistrationComponent from './RegistrationComponent';

class RegistrationConfirm extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            registration: [],
        }
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        var url = 'http://localhost:8080/admin/registration';
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
                <h1>RegistrationConfirm</h1>
                {this.state.registration.length !== 0 ?
                    <div className="table-margin ">
                            {this.state.registration.map((item, index) =>
                                        <RegistrationComponent key={index} registration={item} index={index}/>
                                )}
                    </div>
                    : <span className="text-light" style={{ margin: '20px' }}>It's nothing to show</span>}
            </div>
        )
    }
}
export default RegistrationConfirm;
