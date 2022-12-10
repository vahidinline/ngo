import About from '../components/pages/about';
import Contact from '../components/pages/contact';
import Registerform from '../components/pages/form';
import Home from '../components/pages/home';

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
    name: 'Form',
    path: '/form',
    component: Registerform,
  },
];

export default PageList;
