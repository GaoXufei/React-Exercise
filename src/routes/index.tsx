import * as React from "react";
import { Redirect } from "react-router-dom";

const { lazy, Suspense } = React;

const PostComponent = lazy(() => import("@/pages/posts"));
const Post = (props: any) => (
  <Suspense fallback={null}>
    <PostComponent {...props} />
  </Suspense>
);

const UserComponent = lazy(() => import("@/pages/user"));
const User = (props: any) => (
  <Suspense fallback={null}>
    <UserComponent {...props} />
  </Suspense>
);

export default [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/posts" />
  },
  {
    path: "/posts",
    exact: true,
    component: Post
  },
  {
    path: "/user",
    exact: true,
    component: User
  }
];
