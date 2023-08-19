import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function RootLayout() {
  return (
    <div className="flex justify-center max-[500px]:flex-col">
      <Header />
      <main>
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
export default RootLayout;
