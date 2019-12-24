import * as React from 'react'
import { PostDto } from '../../interfaces/post.dto'
import { List } from 'antd';
import PostItem from './post-item.component'

export default ({ list }: { list: PostDto[] }) => {

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={list}
      renderItem={item => <PostItem item={item} />}
    />
  );
}