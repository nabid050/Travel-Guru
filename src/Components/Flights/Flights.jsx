import { useState } from "react";
import FlightSearch from "./../FlightSearch/FlightSearch";
import FlightResults from "./../FlightResults/FlightResults";
import flightsData from "../../Data/flights";

const Flights = () => {
  const [filteredFlights, setFilteredFlights] = useState([]);

  const handleSearch = (searchData) => {
    let results = [...flightsData];

    // First flight segment
    const firstSegment = searchData.segments[0];

    // Filter by From
    if (firstSegment.from.trim() !== "") {
      results = results.filter((flight) =>
        flight.from
          .toLowerCase()
          .includes(firstSegment.from.toLowerCase())
      );
    }

    // Filter by To
    if (firstSegment.to.trim() !== "") {
      results = results.filter((flight) =>
        flight.to
          .toLowerCase()
          .includes(firstSegment.to.toLowerCase())
      );
    }

    // Filter Cabin
    if (searchData.travellers.cabin !== "") {
      results = results.filter(
        (flight) =>
          flight.cabin === searchData.travellers.cabin
      );
    }

    setFilteredFlights(results);
  };

  return (
    <section className="bg-slate-100 min-h-screen">

      {/* Hero */}

      <div
        className="h-[320px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600')",
        }}
      >
        <div className="max-w-7xl mx-auto w-full px-4">

          <h1 className="text-5xl font-bold text-white">
            Find Your Perfect Flight
          </h1>

          <p className="text-white mt-4 text-lg">
            Search domestic & international flights at the best prices.
          </p>

        </div>
      </div>

      {/* Search Box */}

      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">

        <FlightSearch onSearch={handleSearch} />

      </div>

      {/* Results */}

      <div className="max-w-7xl mx-auto px-4 py-16">

        {filteredFlights.length > 0 ? (
          <FlightResults flights={filteredFlights} />
        ) : (
          <div className="text-center py-20">

            <h2 className="text-3xl font-bold text-[#122B8F]">
              Search Flights
            </h2>

            <p className="text-gray-500 mt-3">
              Enter your departure, destination, and travel details to view
              available flights.
            </p>

          </div>
        )}

      </div>

    </section>
  );
};

export default Flights;