import React from 'react';

class AddBook extends React.Component {

    constructor() {
        super();
        this.state = {
            token: localStorage.getItem('token'),
            username: localStorage.getItem('username'),
            userRole: '',
            bookCategories: ['FANTASY', 'SCIFI', 'ROMANCE', 'ACTION', 'ADVENTURE', 'HORROR'],
        }
    }
    render() {

        return (
            <div>
<<<<<<< Updated upstream
                <div className="box-text-background-header-admin-addbook">
                    <col2>AddBook</col2>
                </div>
                <form className="box-container-admin-addbook">
=======
                <form>
>>>>>>> Stashed changes
                    <div className="form-group">
                        <label htmlFor="inputAddress">Title</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Author</label>
                        <input type="text" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Pages</label>
                        <input type="text" className="form-control" />
                    </div>
                    {this.state.bookCategories.map((item, index) =>
                    <div className="form-check form-check-inline" key={index}>
                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1">{item}</label>
                </div>)}
                <button className="btn btn-secondary btn-login float-right" type='submit'>Add Book</button>
                </form>
            </div>
        )
    }
}
export default AddBook;
