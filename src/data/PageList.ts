import About from '../components/about';
import Contact from '../components/contact';
import Registerform from '../components/form';
import Home from '../components/home';

const PageList = [
  {
    name: 'Home',
    path: '/',
    component: Home,
  },
  {
    name: 'About',
    path: '/about',
    component: About,
  },
  {
    name: 'Contact',
    path: '/contact',
    component: Contact,
  },
  {
    name: 'form',
    path: '/form',
    component: Registerform,
  },
];

export default PageList;
