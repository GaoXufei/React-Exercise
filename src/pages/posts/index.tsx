import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import PostListComponent from '@/modules/post/post-list.component'
import { PostDto } from "../../interfaces/post.dto";
import { LayoutWrapper } from "../../layouts/default";
import API from '@/api/api-request'

const PageIndex = (props: RouteComponentProps) => {

  const [data, setData] = React.useState<PostDto[]>([])

  React.useEffect(() => {
    getList();
  }, [])

  async function getList() {
    const { data: { list } } = await API.posts();
    setData(list)
  }

  return (
    <LayoutWrapper>
      <PostListComponent list={data} />
    </LayoutWrapper>
  );
};

export default PageIndex;
