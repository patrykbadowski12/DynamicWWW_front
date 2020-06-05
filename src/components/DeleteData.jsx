import React from 'react';

class DeleteData extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username')
        }
        this.deleteAllData = this.deleteAllData.bind(this);
    }

    deleteAllData() {
        console.log("DELETE");
        var url = 'http://localhost:8080/admin/data/delete';
        var bearer = 'Bearer ' + this.state.token;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': bearer,
            },
            body: null
        }).then((response) => {
            if (response.ok) {
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
                <button onClick={this.deleteAllData}> DELETE ALL DATA</button>
            </div> 
        )
    }
}
export default DeleteData;
