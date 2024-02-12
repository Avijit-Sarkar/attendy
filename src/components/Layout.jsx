import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <main>
      <section class="py-8 md:py-16">
        <div class="container max-w-screen-xl mx-auto px-4">
          <Header />
        </div>
        <Outlet />
      </section>
      <Footer />
    </main>
  );
};

export default Layout;
