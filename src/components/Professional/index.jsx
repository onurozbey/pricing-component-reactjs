const index = ({ annually }) => {
  return (
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
  );
};

export default index;
