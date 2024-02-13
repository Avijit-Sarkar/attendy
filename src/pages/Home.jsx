import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="bg-white px-6 sm:px-12 md:px-24 lg:px-36">
      <section id="landing" className="w-full h-full rounded-xl">
        <div className="w-full h-full bg-gradient-to-r from-white via-transparent to-transparent py-8 sm:py-12 md:py-16 px-6 sm:px-12 md:px-24">
          <h1 className="text-4xl sm:text-5xl text-green-400 md:text-6xl">
            Attendy
          </h1>
          <p className="pr-6 sm:pr-12 md:pr-20 mt-4 sm:mt-6 md:mt-8 max-w-md">
            A comprehensive web app solution aims to revolutionize attendance
            tracking for educational institutions
          </p>

          <div className="mt-12 sm:mt-16 md:mt-20 flex flex-col sm:flex-row gap-4">
            <button
              className="bg-green-500 hover:bg-green-600 w-full sm:w-28 py-2 rounded-md text-white font-bold mb-2 sm:mb-0"
              onClick={() => navigate("/signup")}
            >
              Signup
            </button>
            <button
              className="border-green-500 hover:bg-green-500 hover:text-white transition ease-linear duration-300 border-2 w-full sm:w-28 py-2 rounded-md text-green-500  font-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
