import React from 'react';
import LoginStyle from "../scss/LoginStyle.scss"
import Moment from 'react-moment';


class ListBookElement extends React.Component {

    constructor() {
        super();
        this.state = {
            shouldShow: false
        }
        this.shouldShowDetails = this.shouldShowDetails.bind(this);
    }

    shouldShowDetails(event) {
        this.setState({shouldShow: !this.state.shouldShow});
    }
    render() {
        return (
            <div>


                <table>
                <td><a scope='row'>{this.props.id+1}</a></td>
                <td><a onClick={this.shouldShowDetails}>{this.props.book.title}</a></td>
                </table>
                <table>
                {this.state.shouldShow ? 
                <div>
                    <tr>
                        <th>Author</th>
                        <th>Release Date</th>
                        <th>Pages</th>
                    </tr>
                    <td><a>{this.props.book.author}</a></td>
                    <td><a><Moment format="YYYY-MM-DD HH:mm">{this.props.book.releaseDate}</Moment></a></td>
                    <td><a>{this.props.book.pages}</a></td>
                    
                </div> : null}
                </table>
            </div>
        )
    }
}
export default ListBookElement;
