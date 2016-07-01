import React, { Component } from 'react';
import { markdown } from 'markdown'

class BinsViewer extends Component {
  render() {
    const rawHTML = markdown.toHTML(this.props.bin.content)
    return (
      <div className="col-sm-4">
        <h5>output...</h5>
        <div dangerouslySetInnerHTML={{ __html: rawHTML }}></div>
      </div>
    );
  }
}

export default BinsViewer
