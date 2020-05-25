import React from 'react';

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
            <div>
                <h1>{this.state.encyclopedia.title}</h1>
                {this.state.registration.size !== 0 ?
                    <div className="table-margin ">
                            {this.state.registration.map((item, index) =>
                                <div key={index}>
                                    <a>{item.author} </a>
                                    <a>{item.content} </a>
                                    <a>{item.date} </a>
                                </div>
                                )}
                    </div>
                    : null}
            </div>
        )
    }
}
export default EncyclopediaPage;
