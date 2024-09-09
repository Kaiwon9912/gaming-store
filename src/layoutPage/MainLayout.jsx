// MainLayout.js
import Header from '../components/header';
import Footer from '../components/footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;

