import React from 'react';
import InlineStyleControls from './inline_style';
import BlockStyleControls from './block_style';
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw
} from 'draft-js';
require('./RichEditor.css');

class RichEditor extends React.Component {
  constructor(props) {
    super(props);
    this.readOnly = this.props.readOnly;

    if (!this.readOnly) {
      this.focus = () => this.refs.editor.focus();
      this.onChange = (editorState) => this.props.updateEditorState(editorState);
      this.handleKeyCommand = (command) => this._handleKeyCommand(command);
      this.onTab = (e) => this._onTab(e);
      this.toggleBlockType = (type) => this._toggleBlockType(type);
      this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
    }
  }

  _handleKeyCommand(command) {
    const {editorState} = this.props;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  _onTab(e) {
    const maxDepth = 4;
    this.onChange(RichUtils.onTab(e, this.props.editorState, maxDepth));
  }

  _toggleBlockType(blockType) {
    this.onChange(
      RichUtils.toggleBlockType(this.props.editorState, blockType)
    );
  }

  _toggleInlineStyle(inlineStyle) {
    this.onChange(
      RichUtils.toggleInlineStyle(this.props.editorState, inlineStyle)
    );
  }

  render() {
    var {editorState} = this.props;

    // If the user changes block type before entering any text, we can
    // either style the placeholder or hide it. Let's just hide it now.
    let className = this.readOnly ? 'RichEditor-readOnly' : 'RichEditor-editor';

    if (!editorState.getCurrentContent) {
      editorState = EditorState.createWithContent(convertFromRaw(editorState));
    }

    var contentState = editorState.getCurrentContent();

    if (!contentState.hasText()) {
      if (contentState.getBlockMap().first().getType() !== 'unstyled') {
        className += ' RichEditor-hidePlaceholder';
      }
    }

    return this.readOnly ? (
      <div className="RichEditor-root--readOnly">
        <div className={className} onClick={this.focus}>
          <Editor
            readOnly={this.readOnly}
            editorState={editorState}
          />
        </div>
      </div>
    ) : (
      <div className="RichEditor-root">
        <BlockStyleControls
          editorState={editorState}
          onToggle={this.toggleBlockType}
        />
        <InlineStyleControls
          editorState={editorState}
          onToggle={this.toggleInlineStyle}
        />
        <div className={className} onClick={this.focus}>
          <Editor
            readOnly={this.readOnly}
            blockStyleFn={getBlockStyle}
            customStyleMap={styleMap}
            editorState={editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
            onTab={this.onTab}
            placeholder="Write your blog here..."
            ref="editor"
            spellCheck={true}
          />
        </div>
      </div>
    );
  }
}

// Custom overrides for "code" style.
const styleMap = {
  CODE: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    fontFamily: '"Lato", "Inconsolata", "Menlo", "Consolas", monospace',
    fontSize: 16,
    padding: 2,
  },
};

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote': return 'RichEditor-blockquote';
    default: return null;
  }
}

export default RichEditor;
