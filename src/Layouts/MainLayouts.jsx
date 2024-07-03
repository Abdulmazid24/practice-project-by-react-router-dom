import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayouts = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100svh-116px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
