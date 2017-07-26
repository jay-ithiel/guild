import React from 'react';
var Loader = require('react-loaders').Loader;

const DeleteBlogModal = ({ blog, isDeleteButtonActive, handleDelete, hideModal, showModal }) => {
    return !showModal ? <div></div> : (
        <section id='blog-delete-modal' className='modal'>
            <div className='full flex-center'>
                <div id='blog-delete-modal-content' className='position-relative'>
                    {
                        isDeleteButtonActive ? (
                            <div>
                                <p onClick={ hideModal } className='close-modal'>x</p>

                                <h4 className='regular margin-bottom-15'>
                                    Deleting a blog is permanent.
                                    Are you sure you want to delete the blog, <strong>`{blog.title}`</strong>?
                                </h4>

                                <div className='flex-between full-width flex-wrap'>
                                    <button onClick={ handleDelete } className='btn option-btn confirm-btn regular'>
                                        Delete
                                    </button>

                                    <button onClick={ hideModal } className='btn option-btn cancel-btn regular'>
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <div className='delete-wait'>
                                <p className='regular margin-bottom-40'>
                                    Deleting. Please wait...
                                </p>
                                <Loader type="ball-rotate" active/>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default DeleteBlogModal;
