import { Layout } from 'antd';
import Homeslider from './section/slider/slider';
import slider from '../../../data/slider';
const Home = () => {
  return (
    <Layout>
      <Homeslider slides={slider} />
    </Layout>
  );
};

export default Home;
