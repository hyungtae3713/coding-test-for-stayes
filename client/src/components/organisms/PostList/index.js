import React from 'react';

import { Post } from 'components';

const PostList = ({ list, loading, ...props }) => {
  return (
    <div>
      { !list.length && loading && <div>Loading</div> }
      { list.map(post => <Post key={post.id} {...post}/>)}
    </div>
  );
};

export default PostList;