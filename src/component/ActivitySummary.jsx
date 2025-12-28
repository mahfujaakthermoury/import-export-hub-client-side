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
    <h3 className="text-5xl text-[#074799] font-semibold">
      <span className="countdown">
        <span style={{ "--value": count, "--digits": 2 }}></span> M
      </span>
    </h3>
  );
};
const ActivitySummary = () => {
    return (
    <div className="py-15 px-20 bg-[#fafafa] mt-20 text-center">
       <h2 className="text-4xl font-bold ">
    Our Global Trade Achievements
  </h2>
  <p className="text-gray-600 max-w-2xl mx-auto my-8">
    We connect businesses across the world through reliable import and export
    solutions. Our growing numbers reflect trust, efficiency, and successful
    global partnerships built over time.
  </p>
      <div className="grid md:grid-cols-4 gap-10 text-center">

        <div className="p-8 shadow-md rounded-xl bg-white">
           <CountUp value={350} />
          
          <p className="text-[#4DA8DA] mt-2">TOTAL IMPORT</p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={385} />
          <p className="text-[#4DA8DA] mt-2">TOTAL EXPORT</p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={430} />
          <p className="text-[#4DA8DA] mt-2">PRODUCTS SERVED</p>
        </div>

        <div className="p-8 shadow-md rounded-xl bg-white">
          <CountUp value={265} />
          <p className="text-[#4DA8DA] mt-2">HAPPY CLIENTS</p>
        </div>

      </div>
    </div>
  );
};


export default ActivitySummary;