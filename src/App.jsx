import { useState } from "react";

function App() {
  const [annually, setAnnually] = useState(false);

  return (
    <>
      <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen">
        <h1 className="text-center text-slate-700 mb-8 text-4xl">
          Our Pricing
        </h1>
        <div className="toggle lg:mb-10">
          <label className="name">Annually</label>
          <input
            type="checkbox"
            className="checkbox"
            id="checkbox"
            checked={annually}
            onChange={() => setAnnually(!annually)}
          />

          <label htmlFor="checkbox" className="label">
            <div className="ball"></div>
          </label>

          <label className="name">Monthly</label>
        </div>

        <div className="flex flex-col flex-wrap justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
          {/* Basic */}
          <article className="p-8 rounded bg-white shadow lg:w-full">
            <h2 className="text-slate-700 text-xl mb-5">Basic</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span>19.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span>199.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">
                500 GB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-600">
                2 Users Allowed
              </li>
              <li className="border-t border-b border-slate-300 py-3 text-slate-600">
                Send up to 3 GB
              </li>
            </ul>
            <button className="button linear-gradient text-white py-3 w-full rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">
              Learn More
            </button>
          </article>

          {/* Professional */}
          <article className="pro linear-gradient p-8 rounded shadow lg:w-full">
            <h2 className="text-white text-xl mb-5">Professional</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-white text-5xl">
                <span className="text-3xl mr-3">$</span>24.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-white text-5xl">
                <span className="text-3xl mr-3">$</span>249.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-white py-3">
                1 TB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-white py-3">
                5 Users Allowed
              </li>
              <li className="border-t border-b border-slate-300 py-3 text-white py-3">
                Send up to 10 GB
              </li>
            </ul>
            <button className="bg-white text-slate-800 py-2 w-full rounded-lg shadow border-white border-2 uppercase cursor-pointer hover:bg-transparent hover:text-white transition-all duration-200">
              Learn More
            </button>
          </article>

          {/* Master */}
          <article className="p-8 rounded bg-white shadow lg:w-full">
            <h2 className="text-slate-700 text-xl mb-5">Master</h2>
            {annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span>39.99
              </h3>
            )}
            {!annually && (
              <h3 className="flex items-center justify-center text-slate-700 text-5xl">
                <span className="text-3xl mr-3">$</span>399.99
              </h3>
            )}
            <ul className="flex justify-center flex-col my-8">
              <li className="border-t border-slate-300 py-3 text-slate-600">
                2 TB Storage
              </li>
              <li className="border-t border-slate-300 py-3 text-slate-600">
                10 Users Allowed
              </li>
              <li className="border-t border-b border-slate-300 py-3 text-slate-600">
                Send up to 20 TB
              </li>
            </ul>
            <button className="button linear-gradient text-white py-3 w-full rounded-lg shadow uppercase cursor-pointer border-2 hover:border-2">
              Learn More
            </button>
          </article>
        </div>

        <br />
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/onurozbey" target="_blank">
            Your Name Here
          </a>
          .
        </div>
      </section>
    </>
  );
}

export default App;
