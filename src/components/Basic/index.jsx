const index = ({ annually }) => {
  return (
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
  );
};

export default index;
