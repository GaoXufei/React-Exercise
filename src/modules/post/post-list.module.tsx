import * as React from 'react'
import { PostDto } from '../../interfaces/post.dto'
import { List, Skeleton } from 'antd';
import PostItemModule from './post-item.module'

export default ({ list }: { list: PostDto[] }) => {
  return (
    <Skeleton paragraph={{ rows: 4 }} active avatar loading={list.length <= 0}>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={list}
        renderItem={item => <PostItemModule item={item} />}
      />
    </Skeleton>
  );
}