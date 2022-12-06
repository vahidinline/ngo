import React from 'react';

import { Button, Form, Input, Select } from 'antd';
import type { FormInstance } from 'antd/es/form';

const { Option } = Select;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

class Registerform extends React.Component {
  formRef = React.createRef<FormInstance>();

  onGenderChange = (value: string) => {
    switch (value) {
      case 'male':
        this.formRef.current!.setFieldsValue({ note: 'Hi, man!' });
        return;
      case 'female':
        this.formRef.current!.setFieldsValue({ note: 'Hi, lady!' });
        return;
      case 'other':
        this.formRef.current!.setFieldsValue({ note: 'Hi there!' });
        break;
      default:
    }
  };

  onFinish = (values: any) => {
    console.log(values);
  };

  onReset = () => {
    this.formRef.current!.resetFields();
  };

  render() {
    return (
      <Form
        {...layout}
        ref={this.formRef}
        name="control-ref"
        onFinish={this.onFinish}>
        <Form.Item name="note" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
          <Select
            placeholder="Select a option and change input text above"
            onChange={this.onGenderChange}
            allowClear>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="note" label="City" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="note" label="Nationality" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) =>
            prevValues.gender !== currentValues.gender
          }>
          {({ getFieldValue }) =>
            getFieldValue('gender') === 'other' ? (
              <Form.Item
                name="customizeGender"
                label="Customize Gender"
                rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={this.onReset}>
            Reset
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Registerform;
