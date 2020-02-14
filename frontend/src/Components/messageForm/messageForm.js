import React, {Component} from 'react';

class MessageForm extends Component {

    state = {
        author: '',
        image: null,
        message: ''
    };

    changeInputHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    fileChangeHandler = e => {
        this.setState({[e.target.name]: e.target.files[0]})
    };

    submitHandler = e => {
        e.preventDefault();
        const formData = new FormData();

        Object.keys(this.state).forEach(key => {
                formData.append(key, this.state[key]);
        });
        console.log(formData, this.state);
        this.props.onSubmit(formData)
    };

    render() {
        return (
            <form className="newPost" onSubmit={this.submitHandler}>
                <p>Author:</p>
                <input type="text" name="author" value={this.state.author} onChange={this.changeInputHandler}/>
                <p>Message:</p>
                <input type="text" name="message" value={this.state.message} onChange={this.changeInputHandler}/>
                <p>File:</p>
                <input type="file" name="image" onChange={this.fileChangeHandler}/>
                <button type="submit">Send</button>
            </form>
        );
    }
}

export default MessageForm;