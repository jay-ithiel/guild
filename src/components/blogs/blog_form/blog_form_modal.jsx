import React from 'react';
import ImageUploadButton from './image_upload_button';
import TagForm from '../../tags/tag_form';
import SubmitBlogButton from './submit_blog_button';

export default class BlogFormModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.state;
  }

  componentWillReceiveProps(nextProps) {
    debugger;
    this.setState({ showBlogFormModal: nextProps.state.showBlogFormModal });
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  closeModal(e) {
    this.props.toggleBlogFormModal(e);
  }

  render() {
    debugger;
    return !this.state.showBlogFormModal ? <div></div> : (
      <div id='blog-form-modal' className='modal' onClick={this.closeModal.bind(this)}>
        <div className='blog-form-modal-content' onClick={this.stopPropagation.bind(this)}>

          <label>Add a Cover Photo for your blog
            <section id='image-upload-button-container'>
              <ImageUploadButton addImage={ this.props.addImage }/>
            </section>
          </label>

          <label>Add a headline summarizing or introducing your blog
            <input
              type='text'
              id='blog-intro-input'
              className='blog-input black'
              onChange={ this.props.handleChange('blogIntro') }
              value={ this.state.blogIntro }
              placeholder='Introduction (Summarize your blog in 1 or 2 sentences)'
              maxLength='50'
            />
          </label>

          <label>Add some tags to your blog (limited to 5)
            <TagForm
              blogId={ this.state.id }
              blogTags={ this.state.tags }
              setTags={ this.props.setTags }
            />
          </label>

          <SubmitBlogButton
            handleSubmit={ this.props.handleSubmit }
            actionType={ this.props.actionType }
            isActive={ this.state.isSubmitButtonActive }
          />
        </div>
      </div>
    );
  }
}
