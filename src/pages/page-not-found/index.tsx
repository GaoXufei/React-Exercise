import * as React from 'react';
import { Result, Button } from 'antd'

const PageNotFound = (props: any) => {

  const handleBackHome = () => props.history.push(`/`)

  return (
    <Result
      status="404"
      title="404"
      subTitle="页面走丢了╭(╯^╰)╮"
      extra={<Button type="primary" onClick={handleBackHome}>返回首页</Button>}
    />
  );
}

export default PageNotFound;