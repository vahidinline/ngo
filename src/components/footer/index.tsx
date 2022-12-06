import { Space } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import { Footer } from 'antd/es/layout/layout';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const Footers = () => {
  return (
    <>
      <Footer style={{ height: 'calc(100vh - 55px)' }}>
        <Space>
          <IconFont type="icon-facebook" />
          <IconFont type="icon-twitter" />
        </Space>
      </Footer>
    </>
  );
};

export default Footers;
