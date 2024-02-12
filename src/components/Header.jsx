import React from "react";

const Header = () => {
  return (
    <nav class="flex-wrap lg:flex items-center justify-between mb-20 lg:mb-40">
      <div class="flex items-center justify-between mb-10 lg:mb-0">
        <img src="assets/image/navbar-logo.svg" alt="Logo" />

        <button class="flex items-center justify-center border border-green-500 w-10 h-10 text-green-500 rounded-md outline-none lg:hidden ml-auto">
          <i data-feather="menu"></i>
        </button>
      </div>

      <ul class="hidden lg:block lg:flex flex-col lg:flex-row lg:items-center lg:space-x-20">
        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/">Services</a>
        </li>

        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/">Works</a>
        </li>

        <li class="font-medium text-green-500 text-lg hover:text-green-300 transition ease-in-out duration-300 mb-5 lg:mb-0">
          <a href="/">Blog</a>
        </li>

        <li class="px-8 py-3 font-medium text-green-500 text-lg text-center border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300">
          <a href="/Account">Connect</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
