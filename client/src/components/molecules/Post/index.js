import React from 'react';

import { Heading, Paragraph } from 'components';

const Post = ({ title, author, comments , ...props }) => {
  return (
    <article>
      <Heading level={3}>{title} &nbsp;<sub> written by: {author.name}</sub> </Heading>
      { /* 콤포넌트화 돼야함 -> <Comment> */
        comments.map((comment, i) => {
          return (
            <Paragraph key={i}>
              &nbsp;┗ {comment.content} <sub> commented by {comment.commenter.name} </sub>
            </Paragraph>
          );
        })
      }
    </article>
  );
};

export default Post;