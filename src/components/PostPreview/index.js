import React from 'react';
import Link from 'gatsby-link';
import moment from 'moment';

export default class PostPreview extends React.Component {
  render() {
    const { post, lastOfType } = this.props;

    return (
      <React.Fragment>
        <div
          className={`post-preview ${
           lastOfType ? "last-of-type" : ""
          }`}
        >
          <div id="post-wrapper" key={post.id}>
            <div className="preview-title-wrapper">
              <h2 className="link-title">
                <Link to={post.frontmatter.path}>
                  {post.frontmatter.title}
                </Link>
              </h2>
              <h3 className="date">
                Published{" "}
                {moment(post.frontmatter.date).format("MMMM Do YYYY")}
              </h3>
            </div>
            {post.frontmatter.featuredImage ? (
              <img
                className="featured-image"
                src={post.frontmatter.featuredImage}
              />
            ) : null}
          </div>
          <div className="preview-content__wrapper">
            <article
              id="article-body"
              dangerouslySetInnerHTML={{
                __html: `<p>${post.excerpt}</p>`
              }}
            />
            <Link to={post.frontmatter.path}>
              <button
                type="button"
                className="continue-reading__button"
              >
                Continue Reading
              </button>
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
