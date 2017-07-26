import React from 'react';
import Comment from './comment';

class Comments extends React.Component {
    constructor(props) {
        super(props);

        this.mapComments = this.mapComments.bind(this);
    }

    componentDidMount() {
        // Get all comments of current blog
        // this.props.requestComments(this.props.blog.id);
    }

    // Maps blog's comments to Comment component
    mapComments() {
        let commentLis = Object.keys(this.props.comments);
        if (commentLis.length === 0) {
          return (
            <h4 className='text-align-center'>Be the first to make a comment!</h4>
          );
        } else {
          return commentLis.map((id, i) => (
            <li key={i}>
              <Comment blog={ this.props.blog } comment={ this.props.comments[id] } />
            </li>
          ));
        }
    }

    render() {
        let commentLis = this.mapComments();

        return (
            <div>
                <div className=''>
                    <h3 className='header'>COMMENTS</h3>
                    <ul className='comments'>
                    { commentLis }
                    </ul>
                </div>
            </div>
        );
    }

    // render() {
    //     let commentLis = this.mapComments();
    //
    //     return (
    //         <div>
    //             <div id=''>
    //                 <h3 className='header'>COMMENTS</h3>
    //                 <ul id='comments'>
    //                     { commentLis }
    //                 </ul>
    //             </div>
    //         </div>
    //     );
    // }
}

export default Comments;
