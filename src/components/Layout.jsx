import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingButtons from './FloatingButtons';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen w-full min-w-0 max-w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full min-w-0">
        <Outlet />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
