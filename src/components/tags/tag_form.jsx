import React from 'react';
import { connect } from 'react-redux';

import Tag from './tag';

import {
  saveTags,
  requestTags
} from '../../actions/tag_actions';

import {
  saveBlogs,
  requestBlogs,
} from '../../actions/blog_actions';

class TagForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newTagName: '',
      blogTags: {},
      tags: null,
      blogs: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ blogTags: nextProps.blogTags });
  }

  removeTag(tagName) {
    return e => {
      let blogTags = this.state.blogTags;
      delete blogTags[tagName];
      this.setState({ blogTags: blogTags });
    };
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    if (Object.keys(this.state.blogTags).length >= 5) {
      alert('You may only add 5 tags to a blog');
      return;
    }

    let blogTags = this.state.blogTags;

    // if newTagName exists in this.props.tags,
    blogTags[this.state.newTagName] = {
      blogId: this.props.blogId
    };

    this.setState({
      blogTags: blogTags,
      newTagName: '',
    });

    this.props.setTags(blogTags);
  }

  mapBlogTags() {
    return Object.keys(this.state.blogTags).map((tagName, key) => (
      <Tag key={key} tagName={tagName} removeTag={this.removeTag.bind(this)}/>
    ));
  }

  render() {
    let blogTagLis = this.mapBlogTags.bind(this)();

    return (
      <section id='tag-form'>
        <form className='flex' onSubmit={this.handleSubmit.bind(this)}>
          <ul id='tags-ul'>{blogTagLis}</ul>

          {
            Object.keys(this.state.blogTags).length >= 5 ? <div></div> : (
              <input
                type='text'
                placeholder='Add a tag...'
                onChange={this.handleChange('newTagName')}
                value={this.state.newTagName}
                id='add-tag-input'
              />
            )
          }

          <button className='btn'></button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  blogs: state.blogs.index,
  tags: state.tags.index,
});

const mapDispatchToProps = dispatch => ({
  saveTags: tags => dispatch(saveTags(tags)),
  requestTags: () => dispatch(requestTags()),
  saveBlogs: blogs => dispatch(saveBlogs(blogs)),
  requestBlogs: () => dispatch(requestBlogs()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
