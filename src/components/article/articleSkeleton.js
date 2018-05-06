import React, { Component } from 'react';
import ArticleTitle from './articleTitle.js';
import ArticleBody from './articleBody.js';
import ArticleFooter from './articleFooter.js';

class ArticleSkeleton extends Component {
  constructor(props) {
    super(props);
    // console.log('props in constructor: ', props);
    // props.match.params to get URL params.
    // props.match.params.articleId to possibly do the ajax here
    // GraphQL (?) to get the article details as well as the author and author details
  }

  // Make an AJAX call to fetch article data and pass the relevant pieces to the subcomponents
  render() {
    return (
        <div className="article-skeleton">
          {console.log('this.props: ', this.props)}

          <ArticleTitle titleProperties={this.props.articleTitleProps}/>
          <ArticleBody bodyProperties={this.props.articleBodyProps}/>
          <ArticleFooter footerProperties={this.props.articleFooterProps}/>
        </div>
    );
  }
}

export default ArticleSkeleton;
