import React from 'react';
import { connect } from 'react-redux';

import AboutUser from '../users/about_user';

class Blog extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blog: {}
        };

        this.setBlog = this.setBlog.bind(this);
    }

    componentDidMount() {
        this.setBlog();
    }

    componentWillReceiveProps(nextProps) {
        this.setBlog(nextProps);
    }

    setBlog(nextProps = this.props) {
        let id = nextProps.history.location.pathname.substring(7)[0];
        let blog = nextProps.blogs[id];
        debugger;
        if (blog) { this.setState({ blog: blog }); }
    }

    render() {
        let blog = this.state.blog;

        return (
            <section id='layout'>
                <div id='blog' className=''>
                    <h3 id='blog-title' className='blog-show-section'>
                        { blog.title }
                    </h3>

                    {
                        (!blog.imageUrl || blog.imageUrl.length === 0) ? <div></div> : (
                            <div id='blog-img' className='blog-show-section'
                                style={{ backgroundImage: `url(${blog.imageUrl})` }}>
                            </div>
                        )
                    }

                    <p id='blog-body' className='blog-show-section'>
                        { blog.body }
                    </p>

                    <div className='blog-show-section'>
                        <AboutUser isAboutCurrentUser={false} authorName={ blog.authorId } authorImageUrl={ blog.authorImageUrl }/>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    blogs: state.blogs.index
});

export default connect(mapStateToProps, null)(Blog);
