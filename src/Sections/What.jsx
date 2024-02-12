/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const What = () => {
  return (
    <section class="py-8 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
          What we do?
        </h1>

        <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20 md:mb-40">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit <br />
          anim id est laborum.
        </p>

        <div class="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
          <div class="mx-auto xl:mx-0 mb-20 xl:mb-0">
            <img src="assets/image/image-1.svg" alt="Image" />
          </div>

          <div class="mx-auto xl:mx-0 text-center xl:text-left">
            <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Design is our most intense <br />
              process
            </h1>

            <p class="font-normal text-gray-400 text-sm md:text-lg mb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum <br />
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              <br />
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est <br />
              laborum.
            </p>

            <a
              href="/"
              class="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300"
            >
              See more
              <i data-feather="chevron-right"></i>
            </a>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row items-center justify-between mb-20 md:mb-40">
          <div class="mx-auto xl:mx-0 text-center xl:text-left mb-20 xl:mb-0">
            <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Don’t worry about the investment, <br />
              it will come back.
            </h1>

            <p class="font-normal text-gray-400 text-sm md:text-lg mb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum <br />
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              <br />
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est <br />
              laborum.
            </p>

            <a
              href="/"
              class="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300"
            >
              See more
              <i data-feather="chevron-right"></i>
            </a>
          </div>

          <div class="mx-auto xl:mx-0">
            <img src="assets/image/image-2.svg" alt="Image" />
          </div>
        </div>

        <div class="flex flex-col xl:flex-row items-center justify-between">
          <div class="mx-auto xl:mx-0 mb-20 xl:mb-0">
            <img src="assets/image/image-3.svg" alt="Image" />
          </div>

          <div class="mx-auto xl:mx-0 text-center xl:text-left">
            <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-10">
              Instantly understandable content <br />
              is important
            </h1>

            <p class="font-normal text-gray-400 text-sm md:text-lg mb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum <br />
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              <br />
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est <br />
              laborum.
            </p>

            <a
              href="/"
              class="flex items-center justify-center xl:justify-start font-semibold text-green-500 text-lg gap-3 hover:text-green-700 transition ease-in-out duration-300"
            >
              See more
              <i data-feather="chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default What;
