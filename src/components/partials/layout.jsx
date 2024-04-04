import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <div className="my-20">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
