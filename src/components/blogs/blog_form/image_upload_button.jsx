import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'kdkgcu3u';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dkcuho5wb/image/upload';

export default class ImageUploadButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadedFileCloudinaryUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });

        this.props.addImage(response.body.secure_url);
      }
    });
  }

  render() {
    return (
      <div>
        <div className='FileUpload'>
          <Dropzone
            id='add-img-btn'
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <div>
          {
            this.state.uploadedFileCloudinaryUrl === '' ? null : (
              <div>
                <p>{this.state.uploadedFile.name}</p>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
//
// import React from 'react';
// import Camera from 'react-icons/lib/fa/camera';
//
// const ImageUploadButton = props => {
//   const upload = e => {
//     e.preventDefault();
//     cloudinary.openUploadWidget( // eslint-disable-line
//       window.cloudinary_options, (error, images) => {
//         if (error) {
//           // Something went wrong
//         } else {
//           props.addImage(images[0].url);
//         }
//       }
//     );
//   };
//
//   // return (
//   //   <div id='add-img-btn' className={`blog-input btn transition-2s-ease-in ${props.color}`} onClick={upload}>
//   //     <Camera id='add-img-icon' size={50}/>
//   //     <h4 className='title-2'>Add Cover Photo</h4>
//   //   </div>
//   // );
//
//   return (
//     <form action="/action_page.php">
//       <input type="file" name="pic" accept="image/*"  onChange={ (e) => props.addImage(e) } />
//     </form>
//   )
// };
//
// export default ImageUploadButton;
