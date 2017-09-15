import React from 'react';
import { connect } from 'react-redux';

import AboutUser from '../users/about_user';
import BodyDisplay from '../editor/editor';
import BlogLikesForm from '../likes/blog_likes_form';
import BlogBookmarkForm from './bookmarks/blog_bookmark_form';
import CommentForm from '../comments/comment_form';
import Comments from '../comments/comments';

import MediumDraftExporter from 'medium-draft/lib/exporter';
import {
  setRenderOptions,
  blockToHTML,
  entityToHTML,
  styleToHTML,
} from 'medium-draft/lib/exporter';

import {
  Editor,
  createEditorState,
  convertFromRaw,
  Block,
} from 'medium-draft';

import { requestUsers } from '../../actions/user_actions';

global.createEditorState = createEditorState;


const newBlockToHTML = (block) => {
  const blockType = block.type;
  if (block.type === Block.ATOMIC) {
    if (block.text === 'E') {
      return {
        start: '<figure class="md-block-atomic md-block-atomic-embed">',
        end: '</figure>',
      };
    } else if (block.text === '-') {
      return <div className="md-block-atomic md-block-atomic-break"><hr/></div>;
    }
  }
  return blockToHTML(block);
};

const newEntityToHTML = (entity, originalText) => {
  if (entity.type === 'embed') {
    return (
      <div>
        <a
          className="embedly-card"
          href={entity.data.url}
          data-card-controls="0"
          data-card-theme="dark"
        >Embedded ― {entity.data.url}
        </a>
      </div>
    );
  }
  return entityToHTML(entity, originalText);
};

class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blog: {},
      users: {}
    };

    this.exporter = setRenderOptions({
      styleToHTML,
      blockToHTML: newBlockToHTML,
      entityToHTML: newEntityToHTML,
    });

    this.setBlog = this.setBlog.bind(this);
  }

  componentDidMount() {
    this.setBlog();
    this.props.requestUsers();
  }

  componentWillReceiveProps(nextProps) {
    this.setBlog(nextProps);
    this.setState({ users: nextProps.users });
  }

  setBlog(nextProps = this.props) {
    let id = nextProps.history.location.pathname.substring(12);
    let blog = nextProps.blogs[id];
    if (blog) { this.setState({ blog: blog }); }
  }

  render() {
    let blog = this.state.blog;
    let author = this.state.users[blog.authorId];

    if (!blog.body) return <div></div>;
    const editorState = createEditorState(blog.body);
    var currentContent = editorState.getCurrentContent();
    const renderedHTML = this.exporter(currentContent);

    return !blog.body || !author ? <div></div> : (
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

          <div id='blog-body' className='blog-show-section'>
            <div dangerouslySetInnerHTML={{ __html: renderedHTML }}></div>

            {
              !blog.likes ? <div></div> : (
                <BlogLikesForm
                  blog={blog}
                  doesUserLikeBlog={blog.likes[this.props.currentUser.username] ? true : false}
                />
              )
            }

            <BlogBookmarkForm blog={blog}/>
          </div>

          <div className='blog-show-section'>

            <AboutUser user={author}/>

          </div>
        </div>

        <CommentForm blog={blog}/>
        <Comments comments={blog.comments} blog={blog}/>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.users.currentUser,
  blogs: state.blogs.index,
  users: state.users.index,
});

const mapDispatchToProps = dispatch => ({
  requestUsers: () => dispatch(requestUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
