import { Form, Layout, Row, Select } from 'antd';
import { Typography } from 'antd';
import TypoInput from '../../elements/TypoInput';
const { Title } = Typography;
const { Option } = Select;
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const Registerform = () => {
  return (
    <Layout>
      <Title>Registeration Form</Title>
      <Row>
        <Form {...layout}>
          <Form.Item name="note" label="Name" rules={[{ required: true }]}>
            <TypoInput
              type="text"
              size="middle"
              handleChange={() => {
                console.log('e.target.value');
              }}
            />
          </Form.Item>
          <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
            <Select placeholder="Select a Gender" allowClear>
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
        </Form>
      </Row>
    </Layout>
  );
};

export default Registerform;
