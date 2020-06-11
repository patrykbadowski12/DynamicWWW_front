import React from 'react';

class AddBook extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: '',
            bookCategories: ['FANTASY', 'SCIFI', 'ROMANCE', 'ACTION', 'ADVENTURE', 'HORROR'],
            selectedBooksCategories: [],
            title: '',
            author: '',
            pages: '',
        }
        this.handleTitle = this.handleTitle.bind(this);
        this.handleAuthor = this.handleAuthor.bind(this);
        this.handlePages = this.handlePages.bind(this);
        this.handleSelectBookCategories = this.handleSelectBookCategories.bind(this);
        this.sendBook = this.sendBook.bind(this);

    }

    handleTitle(event) {
        this.setState({title: event.target.value});
        console.log(this.state.title);
    }

    handleAuthor(event) {
        this.setState({author: event.target.value});
        console.log(this.state.author);
    }

    handlePages(event) {
        this.setState({pages: event.target.value});
        console.log(this.state.pages);
    }

    handleSelectBookCategories(event) {
        let array = this.state.selectedBooksCategories;
        if(array.includes(event.target.value)) {
            array.pop(event.target.value)
        } else{
            array.push(event.target.value);
        }
        this.setState({selectedBooksCategories: array});
    }

    sendBook(event) {
        event.preventDefault();
        var url = 'http://localhost:8080/admin/book';
        var bearer = 'Bearer ' + this.state.token;
        var data = {
            title: this.state.title,
            author: this.state.author,
            categories: this.state.selectedBooksCategories,
            pages: this.state.pages
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
                console.log("Hurra")
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
                
                <form className="box-container-admin-addbook">
                    <div className="form-group">
                        <label htmlFor="inputAddress">Title</label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.handleTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Author</label>
                        <input type="text" className="form-control" value={this.state.author} onChange={this.handleAuthor} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Pages</label>
                        <input type="text" className="form-control" value={this.state.pages} onChange={this.handlePages} />
                    </div>
                    {this.state.bookCategories.map((item, index) =>
                    <div className="form-check form-check-inline" key={index}>
                    <input className="form-check-ipnut" type="checkbox" id="inlineCheckbox1" value={item} onClick={this.handleSelectBookCategories}/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">{item}</label>
                </div>)}
                <button className="btn btn-secondary btn-login float-right" type='submit' onClick={this.sendBook}>Add Book</button>
                </form>
            </div>
        )
    }
}
export default AddBook;
