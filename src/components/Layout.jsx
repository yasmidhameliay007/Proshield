import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";
import { Loader } from "./Loader.jsx";

export const Layout = ({ children }) => {
  return (
    <>
      <Loader />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
};
