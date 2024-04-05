import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <main className="overflow-x-hidden bg-[#FFE9DF]">
      <Header />
      <div className="my-16">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
