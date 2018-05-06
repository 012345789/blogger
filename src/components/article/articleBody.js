import React, { Component } from 'react';

class ArticleBody extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="article-body">
          body props 1 and 2
          {this.props.bodyProp1}
          {this.props.bodyProp2}
        </div>
    );
  }
}

export default ArticleBody;
