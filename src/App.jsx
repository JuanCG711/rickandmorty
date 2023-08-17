import { useEffect, useState } from "react";
import "./App.css";
import { getRandomLocation } from "./utils/random";
import axios from "axios";
import LocationForm from "./components/LocationForm";
import LocationInfo from "./components/LocationInfo";
import ResidentList from "./components/ResidentList";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const fetchDimension = (urlDimension) => {
    const url = `https://rickandmortyapi.com/api/location/${urlDimension}`;
    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target.newLocation.value;
    fetchDimension(newLocation);
  };

  useEffect(() => {
    const randomLocation = getRandomLocation(126);
    fetchDimension(randomLocation);
  }, []);

  return (
    <main className="bg-[url('/img2.jpg')] object-contain font-display min-h-screen">
      <div className="grid grid-cols-1 place-items-center gap-9 mb-8 md:gap-12">
        <div className="relative w-80 h-50 md:w-[500px] ">
          <img className="" src="/portal.png" alt="" />
          <img className=" absolute inset-0 my-auto" src="/titulo.png" alt="" />
        </div>
        <LocationForm handleSubmit={handleSubmit} />
        <LocationInfo currentLocation={currentLocation} />
      </div>
      <div className="grid grid-cols-1 place-items-center">
        <ResidentList
          residents={currentLocation?.residents ?? []}
          currentLocation={currentLocation}
        />
      </div>
    </main>
  );
}
export default App;
