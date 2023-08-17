const ResidentPages = ({ pages, setCurrentPage, currentPage }) => {
  return (
    <ul className="flex flex-row justify-center items-center text-white gap-6 mb-12">
      {pages.map((page) => (
        <li
          className={`${
            currentPage === page && "bg-[#062226]"
          } w-10 h-12 flex justify-center items-center md:w-14 md:h-16`}
          onClick={() => setCurrentPage(page)}
          key={page}
        >
          {page}
        </li>
      ))}
    </ul>
  );
};
export default ResidentPages;
