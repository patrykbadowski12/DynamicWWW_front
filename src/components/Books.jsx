import React from 'react';
import fetch from 'isomorphic-fetch';
import ListBookElement from './ListBookElement';

class Books extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            books: []
        }
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        var url = 'http://localhost:8080/books';
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
                this.setState({ books: data });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });
    }



    render() {

        return (
            <div>
                <h1>books</h1>
                {this.state.books.length !== 0 ?
                    <div className="table-margin ">
                            {this.state.books.map((item, index) =>
                                        <ListBookElement book={item} key={index} id={index}/>
                                )}
                    </div>
                    : <span className="text-light" style={{ margin: '20px' }}>It's nothing to show</span>}
            </div>
        )
    }
}
export default Books;
