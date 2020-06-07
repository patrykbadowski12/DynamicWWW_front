import React from 'react';
import Moment from 'react-moment';

class EncyclopediaPage extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            encyclopedia: {},
            registration: [],
        }
    }

    componentDidMount() {
        this.fetchBooks();
    }

    fetchBooks() {
        var url = 'http://localhost:8080/encyclopedia/' + this.props.match.params.id ;
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
                this.setState({ encyclopedia: data });
                this.setState({ registration: data.registration });
            }
            )
            .catch((error) => {
                console.log('Error during fetch user data');
            });
    }


    render() {
        return (
            <div className="table-margin1">
                <div className="box-text-background-header-encyclopedia">
                    <col4>{this.state.encyclopedia.title}</col4>
                </div>
                {this.state.registration.size !== 0 ?
                    <table className="table table-striped table-dark ">
                        <thead className="thead-dark">
                            <tr>
                                    <th scope="col">Author</th>
                                    <th scope="col" >Content</th>
                                    <th scope="col">Release Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.registration.map((item, index) =>
                                <tr key={index}>
                                    <th>{item.author}</th>
                                    <th>{item.content}</th>
                                    <th><Moment format="YYYY-MM-DD HH:mm">{item.date}</Moment></th>
                                </tr>
                                )}
                        </tbody>
                    </table>
                    : null}
            </div>
        )
    }
}
export default EncyclopediaPage;
