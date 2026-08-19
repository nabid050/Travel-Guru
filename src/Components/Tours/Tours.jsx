import { useState } from "react";
import tourPackages from "../../Data/tourPackages";
import TourSearch from "./../Tours/TourSearch";
import TourResults from "./../Tours/TourResults";

const Tours = () => {
  // Store filtered tours
  const [filteredTours, setFilteredTours] = useState(tourPackages);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Search */}
      <TourSearch
        allTours={tourPackages}
        onSearch={setFilteredTours}
      />

      {/* Results */}
      <TourResults
        tours={filteredTours}
      />

    </div>
  );
};

export default Tours;