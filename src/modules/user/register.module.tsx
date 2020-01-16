import * as React from 'react';
import { Form, Input, Button, Icon } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { Link } from 'react-router-dom';

const { Item } = Form;

const RegisterModule = (props: { form: WrappedFormUtils, playHandleSubmit: any }) => {
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

  /**
   * 提交事件
   * @param event 事件实例
   */
  const _handleSubmit = (event: any) => {
    // 清除默认动作
    event.preventDefault();
    // 获取表单数据
    form.validateFields((err: any, values: any) => {
      // 如果表单验证全部通过
      if (!err) {
        // 删除确认密码
        delete values.confirm;
        // 执行父组件传进来的提交方法
        playHandleSubmit(values)
      }
    })
  }

  /**
   * 验证确认密码
   * @param rule 验证规则
   * @param value 密码
   * @param callback 回调
   */
  const validateToNextPassword = (rule: any, value: any, callback: any) => {
    // 有值并且已经输入过
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback()
  }

  /**
   * 验证确认密码
   * @param rule 验证规则
   * @param value 密码
   * @param callback 回调
   */
  const compareToFirstPassword = (rule: any, value: any, callback: any) => {
    // 获取密码输入
    const _password = form.getFieldValue('password');
    // 如果确认密码已输入，确认密码的值与输入密码不匹配
    if (value && value !== _password) {
      callback(`与密码不匹配`)
    } else {
      callback()
    }
  }

  return (
    <Form onSubmit={_handleSubmit}>
      <Item hasFeedback>
        {getFieldDecorator('username', {
          rules: [{ required: true, message: '用户名不能为空' }]
        })(<Input
          prefix={<Icon type="user" style={{ color: '#fff' }} />}
          placeholder={`用户名`}
        />)}
      </Item>
      <Item hasFeedback>
        {getFieldDecorator('password', {
          rules: [
            { required: true, message: '密码不能为空' },
            { validator: validateToNextPassword }
          ]
        })(<Input.Password
          prefix={<Icon type="lock" style={{ color: '#fff' }} />}
          placeholder={`密码`}
        />)}
      </Item>
      <Item hasFeedback>
        {getFieldDecorator('confirm', {
          rules: [
            { required: true, message: '确认密码不能为空' },
            { validator: compareToFirstPassword }
          ]
        })(<Input.Password onBlur={_handleConfirm}
          prefix={<Icon type="lock" style={{ color: '#fff' }} />}
          placeholder={`确认密码`}
        />)}
      </Item>
      <Item>
        <Icon type="login" style={{ color: '#1890ff', marginRight: '10px' }} />
        <Link to={`/user/login`}>用户登录</Link>
      </Item>
      <Item>
        <Button type="primary" htmlType="submit">注册</Button>
      </Item>
    </Form>
  );
};

const CreateForm = Form.create({ name: 'register' })(RegisterModule);

export default (props: any) => <CreateForm {...props} />
// export default CreateForm;