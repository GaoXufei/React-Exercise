import * as React from 'react'
import { LayoutWrapper } from '@/layouts/default';
import { RouteComponentProps } from 'react-router-dom';
import { PostDto } from '@/interfaces/post.dto';
import API from '@/api/api-request';

const PagePostDetails = (props: RouteComponentProps<any>) => {
  const postId = Number(props.match.params.id);
  const [details, setDetails] = React.useState<PostDto>()

  React.useEffect(() => {
    getDetails(postId)
  }, [postId])

  async function getDetails(id: number) {
    const { data } = await API.postDetails(id)
    setDetails(data)
  }

  return (
    <LayoutWrapper>
      <h1>{details?.title}</h1>
      {details?.content}
    </LayoutWrapper>
  );
}

export default PagePostDetails;