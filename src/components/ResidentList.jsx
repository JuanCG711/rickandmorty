import { useEffect, useState } from "react";
import ResidentCards from "./ResidentCards";
import ResidentPages from "./ResidentPages";

const INITIAL_PAGE = 1;

const ResidentList = ({ residents, currentLocation }) => {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE);

  const RESIDENTS_PER_PAGE = 20;

  const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE);

  const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE;

  const sliceEnd = sliceStart + RESIDENTS_PER_PAGE;

  const residentsInPage = residents.slice(sliceStart, sliceEnd);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  useEffect(() => {
    setCurrentPage(INITIAL_PAGE);
  }, [currentLocation]);

  return (
    <section className="w-[90%] md:w-[60%] ">
      <section className="md:grid md:grid-cols-2 md:gap-9">
        {residentsInPage.map((resident) => (
          <ResidentCards key={resident} residentUrl={resident} />
        ))}
      </section>

      <ResidentPages
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};
export default ResidentList;
