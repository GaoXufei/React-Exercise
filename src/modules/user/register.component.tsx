import * as React from 'react';
import { Form, Input, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';

const { Item } = Form;

const RegisterComponent = (props: { form: WrappedFormUtils, playHandleSubmit: any }) => {
  const [confirmDirty, setConfirmDirty] = React.useState<boolean>(false);
  const { form, playHandleSubmit } = props;
  const { getFieldDecorator } = form;

  /**
   * 焦点移出
   * @param event 事件实例
   */
  const _handleConfirm = (event: any) => {
    const { value } = event.target;
    setConfirmDirty(confirmDirty || !!value)
  }

  const _handleSubmit = (event: any) => {
    event.preventDefault();
    form.validateFields((err: any, values: any) => {
      if (!err) {
        delete values.confirm;
        playHandleSubmit(values)
      }
    })
  }

  const validateToNextPassword = (rule: any, value: any, callback: any) => {
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  const compareToFirstPassword = (rule: any, value: any, callback: any) => {
    const _password = form.getFieldValue('password');
    if (value && value !== _password) {
      callback(`与密码不匹配`)
    } else {
      callback()
    }
  }

  return (
    <Form onSubmit={_handleSubmit}>
      <Item label={`用户名`} hasFeedback>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '用户名不能为空' }]
        })(<Input />)}
      </Item>
      <Item label={`密码`} hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: '密码不能为空' },
            { validator: validateToNextPassword }
          ]
        })(<Input.Password />)}
      </Item>
      <Item label={`确认密码`} hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            { required: true, message: '确认密码不能为空' },
            { validator: compareToFirstPassword }
          ]
        })(<Input.Password onBlur={_handleConfirm} />)}
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">注册</Button>
      </Item>
    </Form>
  );
};

const CreateForm = Form.create({ name: 'register' })(RegisterComponent);

export default (props: any) => <CreateForm {...props} />
// export default CreateForm;