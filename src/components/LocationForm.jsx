const LocationForm = ({ handleSubmit }) => {
  return (
    <form
      className="w-[90%] border border-3 border-[#8EFF8B] flex flex-row md:w-[50%]"
      onSubmit={handleSubmit}
    >
      <input
        className=" bg-transparent placeholder-[#938686] text-[#938686] focus:outline-none w-[840px] p-3 "
        id="newLocation"
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
      />
      <button className="text-white bg-[#8EFF8B] bg-opacity-50 w-auto p-3">
        Search
      </button>
    </form>
  );
};
export default LocationForm;
