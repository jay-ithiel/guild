import React from 'react';

import StyleButton from './style_button';

const BLOCK_TYPES = [
  // {label: 'Large-Text', style: 'header-one'},
  // {label: 'Normal-Text', style: 'header-two'},
  // {label: 'Small-Text', style: 'header-three'},
  // {label: 'H4', style: 'header-four'},
  // {label: 'H5', style: 'header-five'},
  // {label: 'H6', style: 'header-six'},
  // {label: 'Monospace', style: 'CODE'},
  // {label: 'Quote', style: 'blockquote'},
  // {label: 'Code', style: 'code-block'},
];

const BlockStyleControls = (props) => {
  const {editorState} = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) =>
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      )}
    </div>
  );
};

export default BlockStyleControls;
