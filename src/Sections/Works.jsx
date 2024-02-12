/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

const Works = () => {
  return (
    <section class="py-8 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <h1 class="font-semibold text-gray-700 text-3xl md:text-4xl text-center mb-5">
          Our works
        </h1>

        <p class="font-normal text-gray-500 text-md md:text-lg text-center mb-20">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit <br />
          anim id est laborum.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
          <div class="space-y-2 xl:space-y-4">
            <img
              src="assets/image/yoga-1.svg"
              alt="Image"
              class="hover:opacity-75 transition ease-in-out duration-300"
            />

            <p class="font-normal text-gray-400 text-base">
              Design, Branding, Development
            </p>

            <a
              href="/"
              class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
            >
              Yoga School
            </a>
          </div>

          <div class="space-y-2 xl:space-y-4">
            <img
              src="assets/image/yoga-2.svg"
              alt="Image"
              class="hover:opacity-75 transition ease-in-out duration-300"
            />

            <p class="font-normal text-gray-400 text-base">
              Design, Branding, Development
            </p>

            <a
              href="/"
              class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
            >
              Yoga School
            </a>
          </div>

          <div class="space-y-2 xl:space-y-4">
            <img
              src="assets/image/yoga-3.svg"
              alt="Image"
              class="hover:opacity-75 transition ease-in-out duration-300"
            />

            <p class="font-normal text-gray-400 text-base">
              Design, Branding, Development
            </p>

            <a
              href="/"
              class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
            >
              Yoga School
            </a>
          </div>

          <div class="space-y-2 xl:space-y-4">
            <img
              src="assets/image/yoga-3.svg"
              alt="Image"
              class="hover:opacity-75 transition ease-in-out duration-300"
            />

            <p class="font-normal text-gray-400 text-base">
              Design, Branding, Development
            </p>

            <a
              href="/"
              class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
            >
              Yoga School
            </a>
          </div>

          <div class="space-y-2 xl:space-y-4">
            <img
              src="assets/image/yoga-1.svg"
              alt="Image"
              class="hover:opacity-75 transition ease-in-out duration-300"
            />

            <p class="font-normal text-gray-400 text-base">
              Design, Branding, Development
            </p>

            <a
              href="/"
              class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
            >
              Yoga School
            </a>
          </div>

          <div class="space-y-2 xl:space-y-4 mb-10 md:mb-20">
            <img
              src="assets/image/yoga-2.svg"
              alt="Image"
              class="hover:opacity-75 transition ease-in-out duration-300"
            />

            <p class="font-normal text-gray-400 text-base">
              Design, Branding, Development
            </p>

            <a
              href="/"
              class="block font-semibold text-gray-700 text-xl md:text-2xl hover:text-green-500 transition ease-in-out duration-300"
            >
              Yoga School
            </a>
          </div>
        </div>

        <div class="flex justify-center mb-20 md:mb-40">
          <a
            href="/"
            class="px-6 py-2 md:px-8 md:py-3 flex items-center gap-3 font-medium text-green-500 text-lg border-2 border-green-500 rounded-md hover:bg-green-500 hover:text-white transition ease-linear duration-300"
          >
            See more works
            <i data-feather="arrow-up-right"></i>
          </a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 ml-4 md:ml-20 xl:ml-0 mb-20 xl:mb-40">
          <img
            src="assets/image/brand-1.svg"
            alt="Image"
            class="mb-5 md:mb-10 xl:mb-0"
          />

          <img
            src="assets/image/brand-2.svg"
            alt="Image"
            class="mb-5 md:mb-0"
          />

          <img
            src="assets/image/brand-3.svg"
            alt="Image"
            class="mb-5 md:mb-10 xl:mb-0"
          />

          <img
            src="assets/image/brand-4.svg"
            alt="Image"
            class="mb-5 md:mb-0"
          />
        </div>

        <div class="flex flex-wrap md:flex-nowrap justify-between mb-8">
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
