/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Works = () => {
  return (
    <section class="py-8 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="flex flex-wrap md:flex-nowrap justify-between my-8">
          <div>
            <p class="font-normal text-gray-500 text-md md:text-lg uppercase mb-3">
              Let's tealk
            </p>

            <h1 class="font-bold text-gray-700 text-xl md:text-4xl">
              Do you have any Project?
            </h1>
          </div>

          <div class="mt-10">
            <a
              href="/"
              class="px-4 py-2 md:px-8 md:py-3 font-medium text-green-500 text-lg border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300"
            >
              Contact us now
            </a>
          </div>
        </div>

        <hr class="text-gray-300 mb-8" />

        <p class="font-normal text-gray-500 text-md md:text-lg mb-4 md:mb-10">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit <br />
          anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default Works;
