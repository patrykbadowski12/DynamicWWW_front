import React from 'react';

class AddRegistration extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            content: '',
            id: null,
            shouldShowRegistrationForm: false,
        }
        this.sendRegistration = this.sendRegistration.bind(this);
        this.handleContent = this.handleContent.bind(this);
        this.showRegistrationform = this.showRegistrationform.bind(this);
    }

    handleContent(event) {
        this.setState({content: event.target.value});
    }

    handleSelectChange = (event) => {
        this.setState({id: event.target.value})
      }
      showRegistrationform(event) {
        this.setState({ shouldShowRegistrationForm: !this.state.shouldShowRegistrationForm });
    }

    sendRegistration(event) {
        event.preventDefault();
        var url = 'http://localhost:8080/encyclopedia/registry?id=' + this.state.id;
        var bearer = 'Bearer ' + this.state.token;
        var data = {
            content: this.state.content,
            author: this.state.username
        };
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'authorization': bearer,
            }
        }).then((response) => {
            if (response.ok) {
                this.setState({ shouldShowRegistrationForm: false });
            } else {
                throw new Error('Error with fetching data');
            }
        })
        .catch((error) => {
            console.log(error)
        });
    }

    render() {
        return (
            <div>
            <button onClick={this.showRegistrationform}>Add registration</button>
             {this.state.shouldShowRegistrationForm ? 
            <form>
                <div className="form-group">
                    <label>Example select</label>
                    <select className="form-control" onClick={this.handleSelectChange} >
                        {this.props.encyclopedies.map((item, index) =>
                                    <option key={index} value={item.id}>{item.title}</option>
                                )}
                    </select>
                </div>
                <div className="form-group">
                    <label>Example textarea</label>
                    <textarea className="form-control" rows="3" value={this.props.content} onChange={this.handleContent}></textarea>
                </div>
                <button onClick={this.sendRegistration}>Submit</button>
            </form> : null }
            </div>
        )
    }
}
export default AddRegistration;
