import React from 'react';
import {
  ImageSideButton,
  Editor,
  createEditorState,
  getCurrentContent,
  convertToRaw,
} from 'medium-draft';
import 'medium-draft/lib/index.css';

import CustomImageSideButton from './image_side_button';


export default class MediumEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: createEditorState(), // for empty content
      sideButtons: [
        { "title": "Image", "component": CustomImageSideButton }
      ],
    };

    /*
    this.state = {
      editorState: createEditorState(data), // with content
    };
    */

    this.onChange = (editorState) => {
      this.setState({ editorState });
    };
  }

  componentDidMount() {
    this.refs.editor.focus();
  }

  render() {
    const { editorState, sideButtons } = this.state;
    return (
      <Editor
        ref="editor"
        editorState={this.props.editorState}
        sideButtons={sideButtons}
        onChange={this.props.updateEditorState}
      />
    );
  }
};
