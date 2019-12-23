import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import PostListComponent from '@/modules/post/post-list.component'
import { PostDto } from "../../interfaces/post.dto";
import { LayoutWrapper } from "../../layouts/default";
import list from '@/mocks/data'

const PageIndex = (props: RouteComponentProps) => {

  const [data, setData] = React.useState<PostDto[]>([])

  React.useEffect(() => {
    setData(list);
  }, [])

  function handleRemove(item: PostDto) {
    const results = data.filter(post => post.id !== item.id)
    return setData(results);
  }

  return (
    <LayoutWrapper>
      <PostListComponent handleRemove={handleRemove} list={data} />
    </LayoutWrapper>
  );
};

export default PageIndex;
