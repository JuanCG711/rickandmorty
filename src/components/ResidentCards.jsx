import axios from "axios";
import { useEffect, useState } from "react";

const ResidentCards = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState(null);

  const residentStatus = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="text-white mb-12">
      <header className="border border-3 border-[#8EFF8B] flex justify-center items-end relative ">
        <img className="w-full h-full" src={residentInfo?.image} alt="" />
        <div className="flex justify-center items-center gap-3 px-5 mb-5 bg-black bg-opacity-60 border border-3 border-[#8EFF8B] absolute">
          <div
            className={` h-[10px] aspect-square rounded-full ${
              residentStatus[residentInfo?.status]
            }`}
          ></div>
          {residentInfo?.status}
        </div>
      </header>
      <section className="border border-3 border-[#8EFF8B] flex flex-col p-5">
        <h3 className="text-start text-2xl">{residentInfo?.name}</h3>
        <hr className="opacity-70 mb-4" />
        <ul className="flex flex-col ">
          <li className="py-3">
            <span className="text-[#938686] px-5">Species: </span>
            {residentInfo?.species}
          </li>
          <li className="py-3">
            <span className="text-[#938686] px-5">Origin: </span>
            {residentInfo?.origin.name}
          </li>
          <li className="py-3">
            <span className="text-[#938686] px-5">Times appear: </span>
            {residentInfo?.episode.length}
          </li>
        </ul>
      </section>
    </article>
  );
};
export default ResidentCards;
