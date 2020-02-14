import React, {Component} from 'react';
import './Posts.css';
import {fetchMessages} from "../../store/actions/actions";
import {connect} from "react-redux";
import ImgThumbnail from "../ImgThumbnail/ImgThumbnail";

class Posts extends Component {

    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        console.log(this.props.messages);
        return (
            <div className="Posts">
                {Object.keys(this.props.messages).map((message) => (
                    <div key={message} className="block">
                        <p className="author">{this.props.messages[message].author}</p>
                        <p>{this.props.messages[message].message}</p>
                        <div>
                        <ImgThumbnail image={this.props.messages[message].image}/>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.messages.messages
});

const mapDispatchToProps = dispatch => ({
    fetchMessages: () => dispatch(fetchMessages())
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);