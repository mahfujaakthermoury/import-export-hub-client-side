import React, { useEffect, useState } from "react";

const CountUp = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current++;
      setCount(current);
      if (current >= value) clearInterval(interval);
    }, 20);

    return () => clearInterval(interval);
  }, [value]);

  return (
    <h3 className="text-5xl text-[#076a21] font-semibold">
      <span className="countdown">
        <span style={{ "--value": count, "--digits": 3 }}></span>
      </span>
    </h3>
  );
};
const ActivitySummary = () => {
    return (
    <div className="py-15 px-20 bg-[#f5fff8] mt-20">
      <div className="grid md:grid-cols-4 gap-10 text-center">

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={250} />
          <p className="text-gray-600 mt-2">Clients</p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={185} />
          <p className="text-gray-600 mt-2">Volunteers</p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={150} />
          <p className="text-gray-600 mt-2">Event</p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={162} />
          <p className="text-gray-600 mt-2">Doners</p>
        </div>

      </div>
    </div>
  );
};


export default ActivitySummary;