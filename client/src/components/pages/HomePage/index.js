import React from 'react';
import { PostList } from 'containers';

import { PageTemplate } from 'components'

const POST_ITEM_LIMIT = 10;
const HomePage = () => {
  return (
    <PageTemplate>
      <PostList limit={POST_ITEM_LIMIT} />
    </PageTemplate>
  );
};

export default HomePage;