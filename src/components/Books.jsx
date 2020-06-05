import React from 'react';
import fetch from 'isomorphic-fetch';
import LoginStyle from "../scss/LoginStyle.scss"
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
                <div className="box-text-background-header">
                    <col1>books </col1>
                </div>
                <table>
                    <tr>
                        <th>Position</th>
                        <th>Title</th>
                    </tr>
                </table>
                
                    {this.state.books.length !== 0 ?
                            <div>
                                {this.state.books.map((item, index) =>
                                        <ListBookElement book={item} key={index} id={index}/>
                                        
                                )}
                            
                            </div>
                            
                    : <span className="box-text-background-header-book" >It's nothing to show</span>}
            </div>
        )
    }
}
export default Books;
