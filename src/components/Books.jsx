import React from 'react';
import fetch from 'isomorphic-fetch';

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
                <h2>{this.state.books.length}</h2>
                {this.state.books.length !== 0 ?
                    <div className="table-margin ">
                        <table className="table table-striped table-dark ">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Author</th>
                                    <th scope="col">Release Date</th>
                                    <th scope="col">Pages</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                            {this.state.books.map((item, index) =>
                                    <tr key={index}>
                                        <th scope='row'>{index+1}</th>
                                        <th>{item.title}</th>
                                        <th>{item.author}</th>
                                        <th>{item.releaseDate}</th>
                                        <th>{item.pages}</th>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                    : <span className="text-light" style={{ margin: '20px' }}>It's nothing to show</span>}

            </div>
        )
    }
}
export default Books;
