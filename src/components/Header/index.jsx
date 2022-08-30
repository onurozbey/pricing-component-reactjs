import { useState } from "react";
// Components
import Basic from "../Basic";
import Professional from "../Professional";
import Master from "../Master";

const index = () => {
  const [annually, setAnnually] = useState(false);

  return (
    <section className="p-5 lg:flex lg:flex-col items-center justify-center lg:h-screen lg:w-full">
      <h1 className="text-center text-slate-700 mb-8 text-4xl">Our Pricing</h1>
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

      {/* Card Container  */}
      <div className="flex flex-col flex-wrap justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row lg:flex-nowrap lg:w-full">
        <Basic annually={annually} />
        <Professional annually={annually} />
        <Master annually={annually} />
      </div>
    </section>
  );
};

export default index;
