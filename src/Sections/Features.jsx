import React from "react";

const Features = () => {
  return (
    <section class="py-8 md:py-16">
      <div class="container max-w-screen-xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div class="text-center mb-10 xl:mb-0">
            <div class="flex items-center justify-center">
              <div class="w-20 py-7 flex justify-center bg-purple-50 text-purple-500 rounded-md mb-5 md:mb-10">
                <i data-feather="bar-chart-2"></i>
              </div>
            </div>

            <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
              Business planning
            </h2>

            <p class="font-normal text-gray-400 text-sm md:text-lg">
              Excepteur sint occaecat cupidatat non <br />
              proident, sunt in culpa qui officia deserunt <br />
              mollit anim id est laborum.
            </p>
          </div>

          <div class="text-center mb-10 md:mb-0">
            <div class="flex items-center justify-center">
              <div class="w-20 py-7 flex justify-center bg-red-50 text-red-500 rounded-md mb-5 md:mb-10">
                <i data-feather="dollar-sign"></i>
              </div>
            </div>

            <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
              Financial planning
            </h2>

            <p class="font-normal text-gray-400 text-sm md:text-lg">
              Excepteur sint occaecat cupidatat non <br />
              proident, sunt in culpa qui officia deserunt <br />
              mollit anim id est laborum.
            </p>
          </div>

          <div class="text-center">
            <div class="flex items-center justify-center">
              <div class="w-20 py-7 flex justify-center bg-blue-50 text-blue-500 rounded-md mb-5 md:mb-10">
                <i data-feather="search"></i>
              </div>
            </div>

            <h2 class="font-semibold text-gray-700 text-xl md:text-3xl mb-5">
              Market Analytics
            </h2>

            <p class="font-normal text-gray-400 text-sm md:text-lg">
              Excepteur sint occaecat cupidatat non <br />
              proident, sunt in culpa qui officia deserunt <br />
              mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
