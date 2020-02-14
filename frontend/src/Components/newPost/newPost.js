import React, {Component} from 'react';
import './newPost.css';
import {connect} from "react-redux";
import {createPost} from "../../store/actions/actions";
import MessageForm from "../messageForm/messageForm";

class NewPost extends Component {

    createPosts = async message => {
        await this.props.createPost(message);
        this.props.history.push('/');
    };

    render() {
        return (
                <MessageForm
                onSubmit={this.createPosts}
                />
        );
    }
}

const mapDispatchToProps = dispatch => ({
    createPost: (post) => dispatch(createPost(post))
});

export default connect(null, mapDispatchToProps)(NewPost);