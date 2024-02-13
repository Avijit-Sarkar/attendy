import React from "react";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <nav class="flex-wrap lg:flex items-center justify-between mb-20 lg:mb-40">
      <div class="flex items-center justify-between mb-10 lg:mb-0">
        <MobileNav />
      </div>

      <ul class="hidden lg:block lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20">
        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/">Home</a>
        </li>
        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/classes">Classes</a>
        </li>

        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/dashboard">Dashboard</a>
        </li>

        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/profile">Profile</a>
        </li>
      </ul>
      <button class="px-8 py-3 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300 hidden lg:block">
        <a href="/login">Login</a>
      </button>
    </nav>
  );
};

export default Header;
