import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import PageList from '../../data/PageList';

const Navbar = () => {
  return (
    <Layout className="layout">
      <Menu mode="horizontal">
        {PageList.map((page) => (
          <Menu.Item key={page.name}>
            <Link to={page.path}>{page.name}</Link>
          </Menu.Item>
        ))}
      </Menu>
    </Layout>
  );
};

export default Navbar;
