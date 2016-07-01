import React, { Component } from 'react';
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/markdown/markdown'

class BinsEditor extends Component {
  onEditorChange(content) {
    Meteor.call('bins.update', this.props.bin, content)
  }

  render() {
    return (
      <div className="col-sm-8">
        <h5>input...</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.onEditorChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }} />
      </div>
    );
  }
}

export default BinsEditor
