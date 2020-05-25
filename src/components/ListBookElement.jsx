import React from 'react';


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
                <a scope='row'>{this.props.id+1}</a>
                <a onClick={this.shouldShowDetails}>{this.props.book.title}</a>
                {this.state.shouldShow ? 
                <div>
                    <a>{this.props.book.author}</a>
                    <a>{this.props.book.releaseDate}</a>
                    <a>{this.props.book.pages}</a>
                </div> : null}
                
            </div>
        )
    }
}
export default ListBookElement;
