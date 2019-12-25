import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import PostListComponent from '@/modules/post/post-list.component'
import { PostDto } from "../../interfaces/post.dto";
import { LayoutWrapper } from "../../layouts/default";
import API from '@/api/api-request'
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import * as actionCreators from './index-store/actionCreators'

const PageIndex = (props: any) => {

  const { postList } = props;
  const { getPostList } = props;

  const [data, setData] = React.useState<PostDto[]>([])


  React.useEffect(() => {
    if (!postList) {
      getPostList();
    }
  }, [postList, getPostList])

  console.log(postList);

  // async function getList() {
  //   const { data: { list } } = await API.posts();
  //   setData(list)
  // }

  return (
    <LayoutWrapper>
      <PostListComponent list={data} />
    </LayoutWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  postList: state.getIn(['posts', 'postList']),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): any => {
  return {
    getPostList: () => dispatch(actionCreators.getPostsList()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);
