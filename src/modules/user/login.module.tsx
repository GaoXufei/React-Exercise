import * as React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Link } from 'react-router-dom';

const { Item } = Form;

const LoginModule = (props: { form: WrappedFormUtils, playHandleSubmit: any }) => {

  const { form, playHandleSubmit } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        playHandleSubmit(values);
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Item>
        {
          getFieldDecorator('username', {
            rules: [
              { required: true, message: '用户名不能为空' }
            ]
          })(<Input
            placeholder={`用户名`}
            prefix={<Icon type="user" style={{ color: '#fff' }} />}
          />)
        }
      </Item>
      <Item>
        {
          getFieldDecorator('password', {
            rules: [
              { required: true, message: '密码不能为空' }
            ]
          })(<Input.Password
            placeholder={`密码`}
            prefix={<Icon type="lock" style={{ color: '#fff' }} />}
          />)
        }
      </Item>
      <Item>
        <Icon type="swap" style={{ color: '#1890ff', marginRight: 10 }} /><Link to={`/user/register`}>切换注册</Link>
      </Item>
      <Item>
        <Button type="danger" htmlType="submit">登录</Button>
      </Item>
    </Form>
  );
}

const CreateForm = Form.create({ name: 'login' })(LoginModule)

export default (props: any) => <CreateForm {...props} />;