import React from 'react';
import { withRouter } from 'react-router';
import { isUserSignedIn } from 'blockstack';
import SubmitBlogButton from './submit_blog_button';
import ImageUploadButton from './image_upload_button';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import BlogBodyEditor from '../../editor/editor';
import $ from 'jquery';
import Blog from '../../../models/blog.js';

class BlogForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: '',
      blogIntro: '',
      body: EditorState.createEmpty(),
      imageUrl: '',
      authorId: '',
      authorImageUrl: '',
      updatedAt: '',
      isSubmitButtonActive: true,
    };

    this.updateEditorState = editorState => this.setState({ body: editorState });
    this.actionType = props.history.location.pathname === '/blogs/new' ? 'Publish' : 'Update';
    this.setBlogToEdit = this.setBlogToEdit.bind(this);
    this.hasErrors = this.hasErrors.bind(this);
    this.addImage = this.addImage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMissingUserInfo = this.handleMissingUserInfo.bind(this);
  }

  componentDidMount() {
    if (!isUserSignedIn()) { this.props.history.push('/signin'); }
    if (this.props.currentUser) { this.handleMissingUserInfo(); }
    if (Object.keys(this.props.blogs).length > 0) { this.setBlogToEdit(); }
  }

  componentWillReceiveProps(nextProps) {
    this.setBlogToEdit(nextProps);
  }

  setBlogToEdit(nextProps = this.props) {
    if (this.state.id === null && this.actionType === 'Update') {
      let blog = nextProps.blogs[
        parseInt(this.props.history.location.pathname.substring(12), 10)
      ];

      this.setState({
        id: blog.id,
        title: blog.title,
        blogIntro: blog.blogIntro,
        body: blog.body,
        imageUrl: blog.imageUrl,
        authorId: blog.authorId,
        authorImageUrl: blog.authorImageUrl,
        updatedAt: blog.updatedAt
      });
    }
  }

  addImage(imageUrl) {
    this.setState({ imageUrl: imageUrl });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  toggleActiveLabel(inputName) {
    return e => {
      $('.hidden-label').fadeOut();
      $(`#hidden-label-${inputName}`).fadeIn();
    }
  }

  handleMissingUserInfo() {
    // This function will set the blog.authorId and blog.authorImageUrl if the user hasn't bought a Blockstack username or set their profile image yet
    let author = this.props.currentUser;
    let avatarUrl = 'https://res.cloudinary.com/ddgtwtbre/image/upload/v1482131647/person-solid_telh7f.png';

    this.setState({ authorId: author.username });

    if (author.profile.image) {
      this.setState({ authorImageUrl: author.profile.image[0].contentUrl });
    } else {
      this.setState({ authorImageUrl: avatarUrl });
    }
  }

  hasErrors() {
    // Refactor this function to use react state
    let hasErrors = false;

    if (this.state.title.length <= 0) {
      hasErrors = true;
      $('#blog-title-error').fadeIn();
      $('#blog-title-label').addClass('outline-red');
    } else {
      $('#blog-title-error').fadeOut();
      $('#blog-title-label').removeClass('outline-red');
    }

    // if (this.state.body.length <= 0) {
    if (!this.state.body.getCurrentContent().hasText()) {
      hasErrors = true;
      $('#blog-body-error').fadeIn();
      $('#blog-body-label').addClass('outline-red');
    } else {
      $('#blog-body-error').fadeOut();
      $('#blog-body-label').removeClass('outline-red');
    }

    return hasErrors;
  }

  processForm() {
    let blog = this.state;
    this.setState({ isSubmitButtonActive: false });

    // If blog.body.getCurrentContent does not exist, blog.body is converted from raw state to EditorState
    if (!blog.body.getCurrentContent) { blog.body = convertFromRaw(blog.body) }

    blog.body = convertToRaw(blog.body.getCurrentContent());
    if (this.actionType === 'Publish') { blog.id = this.props.blogIndex + 1; }
    blog = new Blog(blog);
    
    // Add new Blog to blogs state and save Blogs
    this.props.blogs[blog.id] = blog;
    this.props.saveBlogs(this.props.blogs);

    // Add new Blog to currentUser's authoredBlogs and save Users
    this.props.currentUser.authoredBlogs[blog.id] = blog;
    this.props.saveUsers(this.props.users);
  }

  handleSubmit(e) {
    e.preventDefault();
    // Check form for errors. If hasErrors returns false, there are no errors so we can process the form
    if (!this.hasErrors()) { this.processForm() }
  }

  render() {
    let imageSection = [];

    if (this.state.imageUrl.length === 0) {
      imageSection.push(
        <ImageUploadButton
          key={ Math.random() }
          addImage={ this.addImage }
        />
      );
    } else {
      imageSection.push(
        <div>
          <div id='blog-uploaded-img' key={ Math.random() }
            style={{ backgroundImage: `url(${this.state.imageUrl})` }}>
          </div>

          <ImageUploadButton
            color={'white-important'}
            key={Math.random()}
            addImage={this.addImage}
          />
        </div>
      );
    }

    return (
      <div id='blog-form-container'>
        <form id='blog-form' onSubmit={ this.handleSubmit.bind(this) }>

          <label id='blog-title-label'
            className='blog-form-label position-relative'
            onClick={ this.toggleActiveLabel('title') }>

            <h7 className='hidden-label' id='hidden-label-title'>Title</h7>

            <span id='blog-title-error' className='error-message'>
              Title cannot be blank
            </span>

            <input type='text'
              id='blog-title-input'
              className='blog-input black'
              onChange={ this.handleChange('title') }
              value={ this.state.title }
              placeholder='Title'
              maxLength='50'
            />
          </label>

          <label id='blog-body-label'
            className='blog-form-label position-relative'
            onClick={ this.toggleActiveLabel('body') }>

            <h7 className='hidden-label' id='hidden-label-body'>Body</h7>

            <span id='blog-body-error' className='error-message'>
              Blog body cannot be blank
            </span>

            <BlogBodyEditor
              editorState={ this.state.body }
              updateEditorState={ this.updateEditorState }
            />
          </label>

          <label id='blog-intro-label'
            className='blog-form-label position-relative'
            onClick={ this.toggleActiveLabel('intro') }>

            <h7 className='hidden-label' id='hidden-label-intro'>Intro</h7>

            <input
              type='text'
              id='blog-intro-input'
              className='blog-input black'
              onChange={ this.handleChange('blogIntro') }
              value={ this.state.blogIntro }
              placeholder='Introduction (Summarize your blog in 1 or 2  sentences)'
              maxLength='50'
            />
          </label>

          <div className='add-img-btn-box'>{ imageSection }</div>

          <SubmitBlogButton
            actionType={ this.actionType }
            isActive={ this.state.isSubmitButtonActive }
          />
        </form>
      </div>
    );
  }
}

export default withRouter(BlogForm);
