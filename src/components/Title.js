import React from "react";

const Title = ({ overview, original_title }) => {
  console.log({ original_title }, { overview });
  return (
    <div className="absolute bg-gradient-to-r from-[#000000] via-transparent  to-transparent-to inset-0    opacity-[0.4] ">
      <div className="  ">
        <div className=" w-1/3 mt-80 ml-12 ">
          <p className="py-3 text-white font-bold text-4xl">{original_title}</p>
          <p className="pb-6 text-white ">{overview}</p>
          <div className=" my-6 ">
            <button className="p-3 text-black  font-bold rounded text-xl bg-[#ffffff] hover:bg-slate-700">
              ▶️ Play
            </button>
            <button className="p-3 ml-3 font-bold text-xl rounded bg-[#ffffff] text-black">
              More Info
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Title;
