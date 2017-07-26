import React from 'react';
import { connect } from 'react-redux';
import Comment from '../../../models/comment.ts';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            body: '',
            blogId: '',
            authorId: ''
        };
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        let comment = new Comment(
            this.state.body,
            this.state.blogId,
            this.state.authorId
        );
        // dispatch createComment action
        // this.props.createComment(comment);
    }

    render() {
        return (
            <div id='comment-form-container'>
                <form onSubmit={ this.handleSubmit }>
                    <textarea
                        id='comment-input'
                        onChange={ this.handleChange('body') }
                        value={ this.state.body }
                        placeholder='Your comment here...'
                    />

                <button id='submit-comment-btn' className='btn primary-btn'>
                        Post Comment
                    </button>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
