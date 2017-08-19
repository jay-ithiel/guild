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
      blogTags: [],
      tags: null,
      blogs: null,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // debugger;
    // this.props.requestTags();
    // this.props.requestBlogs();
  }

  componentWillReceiveProps(nextProps) {
    debugger;
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    this.setState({
      blogTags: [this.state.blogTags + [this.state.newTagName]],
      newTagName: '',
    });
  }

  mapBlogTags() {
    debugger;
    return this.state.blogTags.map((tagName, key) => (
      <Tag key={key} tagName={tagName}/>
    ));
  }

  render() {
    let blogTagLis = [];
    if (this.state.blogTags.length > 0) {
      blogTagLis = this.mapBlogTags.bind(this)();
    }

    debugger;

    return (
      <section id='tag-form'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {/*
            <ul id='tags-ul'>{ blogTagLis }</ul>
          */}

          <input
            type='text'
            placeholder='Add a tag...'
            onChange={this.handleChange('newTagName')}
            value={this.state.newTagName}
            id='add-tag-input'
          />

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
