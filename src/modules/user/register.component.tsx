import * as React from 'react';
import { Form, Input } from 'antd';

const { Item } = Form;

export default (props: any) => {

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  // const tailFormItemLayout = {
  //   wrapperCol: {
  //     xs: {
  //       span: 24,
  //       offset: 0,
  //     },
  //     sm: {
  //       span: 16,
  //       offset: 8,
  //     },
  //   },
  // };

  console.log(props)

  return (
    <Form {...formItemLayout}>
      <Item label={`用户名`}>
        <Input />
      </Item>
    </Form>
  );
};