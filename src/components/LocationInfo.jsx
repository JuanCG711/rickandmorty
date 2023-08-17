const LocationInfo = ({ currentLocation }) => {
  return (
    <section className="text-[#938686]  bg-transparent border border-3 border-[#8EFF8B] w-[90%] mb-7 flex flex-col p-5 md:w-[50%]">
      <h3 className="text-center text-[#8EFF8B] text-2xl mb-5">
        {currentLocation?.name}
      </h3>
      <ul className="flex justify-around gap-5">
        <li className=" text-center ">
          <span className="text-white">Type: </span>
          {currentLocation?.type}
        </li>
        <li className=" text-center ">
          <span className="text-white">Dimension: </span>
          {currentLocation?.dimension}
        </li>
        <li className=" text-center ">
          <span className="text-white">Population: </span>
          {currentLocation?.residents.length}
        </li>
      </ul>
    </section>
  );
};
export default LocationInfo;
