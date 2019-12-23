import * as React from "react";
import { Redirect } from "react-router-dom";

const { lazy, Suspense } = React;

/**
 * 主页模块
 */
const HomeComponent = lazy(() => import('@/pages/home'))
const Home = (props: any) => <Suspense fallback={null}>
  <HomeComponent {...props} />
</Suspense>

/**
 * 文章模块
 */
const PostComponent = lazy(() => import("@/pages/posts"));
const Post = (props: any) => (
  <Suspense fallback={null}>
    <PostComponent {...props} />
  </Suspense>
);

/**
 * 用户模块
 */
const UserComponent = lazy(() => import("@/pages/user"));
const User = (props: any) => (
  <Suspense fallback={null}>
    <UserComponent {...props} />
  </Suspense>
);

const RegisterComponent = lazy(() => import("@/pages/user/register"))
const Register = (props: any) => (
  <Suspense fallback={null}>
    <RegisterComponent {...props} />
  </Suspense>
);

/**
 * 404模块
 */
const NotFoundComponent = lazy(() => import('@/pages/page-not-found'))
const NotFound = (props: any) => (
  <Suspense fallback={null}>
    <NotFoundComponent {...props} />
  </Suspense>
);


export default [
  {
    component: Home,
    routes: [
      {
        path: '/',
        exact: true,
        render: () => <Redirect to="/posts" />,
      },
      {
        path: "/posts",
        exact: true,
        component: Post
      },
      {
        path: "/user",
        exact: true,
        component: User,
        routes: [
          {
            path: '/register',
            exact: true,
            component: Register,
          }
        ],
      },
      {
        path: '*',
        hasHeader: false,
        component: NotFound
      }
    ],
  },



];
