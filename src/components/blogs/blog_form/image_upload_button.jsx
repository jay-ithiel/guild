import React from 'react';
import Camera from 'react-icons/lib/fa/camera';
import Cloudinary from 'cloudinary';

const ImageUploadButton = props => {
    const upload = e => {
        debugger;
        Cloudinary.openUploadWidget(
            window.cloudinary_options, (error, images) => {
                if (error) {
                    // Something went wrong
                } else {
                    props.addImage(images[0].url);
                }
            }
        );
    };

    return (
        <div id='add-img-btn' className={`blog-input btn transition-2s-ease-in ${props.color}`} onClick={upload}>
            <Camera id='add-img-icon' size={50}/>
            <h4 className='title-2'>Add Cover Photo</h4>
        </div>
    );
};

export default ImageUploadButton;
