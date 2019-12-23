import * as React from 'react'
import { PostDto } from '../../interfaces/post.dto'
import { Link } from 'react-router-dom';
import { List, Icon, Avatar } from 'antd';

const { Item } = List;
const { Meta } = Item;

const IconText = ({ type, text, handleRemove, item }: { type: string, text: string, handleRemove: any, item: PostDto }) => (
  <span onClick={handleRemove.bind(null, item)}>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

export default ({ item, handleRemove }: { item: PostDto, handleRemove: any }) => {
  return (
    <Item
      key={`${item.id}-${item.title}`}
      actions={[
        <IconText type={`delete`} item={item} text={`删除`} key="list-vertical-star-o" handleRemove={handleRemove} />
      ]}
      extra={
        <img
          width={272}
          alt="logo"
          src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
        />
      }
    >
      <Meta
        avatar={<Avatar src={item.user.avatar.url} />}
        title={<Link to={`/posts/${item.id}`}>{item.title}</Link>}
        description={item.created}
      />
      {item.content}
    </Item>
  );
}