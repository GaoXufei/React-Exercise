import * as React from 'react'
import { LayoutWrapper } from '@/layouts/default';
import { PostDto } from '@/interfaces/post.dto';
import { connect } from 'react-redux'
import { getPostDetails as ReduxGetPostDetails } from './store/actionCreators'

const PagePostDetails = (props: any) => {
  const postId = Number(props.match.params.id);
  const { postDetails } = props;
  const { getPostDetails } = props;

  React.useEffect(() => {
    if (!postDetails.size) {
      getPostDetails(postId)
    }
  }, [postId, postDetails, getPostDetails])

  const resultPostDetails: PostDto = postDetails.toJS()

  return (
    <LayoutWrapper centerMargin={true} padding={true}>
      <h1>{resultPostDetails?.title}</h1>
      <h2>{resultPostDetails?.user?.username}</h2>
      <p>{resultPostDetails?.created}</p>
      {resultPostDetails?.content}
    </LayoutWrapper>
  );
}

const mapStateToProps = (state: any) => ({
  postDetails: state.getIn(['posts', 'postDetails'])
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => {
  return {
    getPostDetails: (id: number) => dispatch(ReduxGetPostDetails(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PagePostDetails);