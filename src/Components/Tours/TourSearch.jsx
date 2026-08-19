import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaSearch,
  FaDollarSign,
  FaSuitcaseRolling,
} from "react-icons/fa";

const TourSearch = ({ allTours, onSearch }) => {
  const [destination, setDestination] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = () => {
    const filtered = allTours.filter((tour) => {
      const matchDestination =
        destination === "" ||
        tour.country.toLowerCase().includes(destination.toLowerCase()) ||
        tour.title.toLowerCase().includes(destination.toLowerCase());

      const matchType =
        type === "" || tour.type === type;

      const matchBudget =
        budget === "" || tour.price <= Number(budget);

      return (
        matchDestination &&
        matchType &&
        matchBudget
      );
    });

    onSearch(filtered);
  };

  return (
    <section className="bg-gradient-to-r from-[#122B8F] to-[#0f2377] py-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-4xl font-bold text-center text-[#122B8F]">
            Find Your Dream Tour
          </h2>

          <p className="text-center text-gray-500 mt-3">
            Explore the world's best destinations at unbeatable prices.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

            {/* Destination */}

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaMapMarkerAlt />
                Destination
              </label>

              <input
                type="text"
                placeholder="USA, Italy, Switzerland..."
                className="input input-bordered w-full"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />

            </div>

            {/* Tour Type */}

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaSuitcaseRolling />
                Tour Type
              </label>

              <select
                className="select select-bordered w-full"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All Tours</option>
                <option>Adventure</option>
                <option>Luxury</option>
                <option>Family</option>
                <option>Budget</option>
              </select>

            </div>

            {/* Budget */}

            <div>

              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaDollarSign />
                Maximum Budget
              </label>

              <select
                className="select select-bordered w-full"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              >
                <option value="">Any Budget</option>
                <option value="1000">$1000</option>
                <option value="1500">$1500</option>
                <option value="2000">$2000</option>
                <option value="2500">$2500</option>
                <option value="3000">$3000</option>
              </select>

            </div>

            {/* Button */}

            <div className="flex items-end">

              <button
                onClick={handleSearch}
                className="btn bg-[#122B8F] hover:bg-[#0f2377] text-white border-none w-full"
              >
                <FaSearch />
                Search Tours
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TourSearch;