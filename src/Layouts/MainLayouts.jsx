import { Outlet } from 'react-router-dom';
import Home from '../components/Home';
import Footer from '../components/Footer';

const MainLayouts = () => {
  return (
    <div>
      <Home></Home>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
