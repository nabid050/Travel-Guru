import { useState } from "react";
import hotelsData from "../../Data/hotels";
import HotelSearch from "./../HotelSearch/HotelSearch";
import HotelResults from "./../HotelResults/HotelResult";

const Hotels = () => {
  const [filteredHotels, setFilteredHotels] = useState(hotelsData);

  return (
    <div className="bg-slate-50 min-h-screen">

      <HotelSearch
        hotels={hotelsData}
        onSearch={setFilteredHotels}
      />

      <HotelResults
        hotels={filteredHotels}
        loading={false}
        searchText=""
        sortBy="recommended"
      />

    </div>
  );
};

export default Hotels;