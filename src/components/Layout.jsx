import { Outlet } from "react-router-dom";
import ScrollToTop from '../components/ui/ScrollToTop';
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-stone-800 flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />
            <main className="flex-grow">
                <Outlet /> {/* Affiche la page en fonction de la route active */}
            </main>
        <Footer />
    </div>
  );
};

export default Layout;