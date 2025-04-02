import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="bg-black flex flex-col min-h-screen">
        <Navbar />
            <main className="flex-grow">
                <Outlet /> {/* Affiche la page en fonction de la route active */}
            </main>
        <Footer />
    </div>
  );
};

export default Layout;