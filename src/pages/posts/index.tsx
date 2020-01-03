import * as React from "react";
import PostListModule from '@/modules/post/post-list.module'
import { LayoutWrapper } from "../../layouts/default";
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { getPostList as ReduxGetPostList } from './store/actionCreators'

const PageIndex = (props: any) => {

  const { postList } = props;
  const { getPostList } = props;

  React.useEffect(() => {
    !postList.length && getPostList();
  }, [postList, getPostList])

  return (
    <LayoutWrapper padding={true} centerMargin={true}>
      <PostListModule list={postList} />
    </LayoutWrapper>
  );
};

const mapStateToProps = (state: any) => ({
  postList: state.getIn(['posts', 'postList']).toJS(),
});

const mapDispatchToProps = (dispatch: Dispatch<any>): any => {
  return {
    getPostList: () => dispatch(ReduxGetPostList({ limit: 37 })),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageIndex);
