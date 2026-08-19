import { useMemo } from "react";
import HotelCard from "./../HotelCard/HotelCard";

const HotelResults = ({
  hotels = [],
  loading = false,
  searchText = "",
  sortBy = "recommended",
}) => {
  // Sorting Logic
  const sortedHotels = useMemo(() => {
    let data = [...hotels];

    switch (sortBy) {
      case "price-low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "reviews":
        data.sort((a, b) => b.reviews - a.reviews);
        break;

      default:
        break;
    }

    return data;
  }, [hotels, sortBy]);

  // Loading State
  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow animate-pulse h-[420px]"
            />
          ))}
        </div>
      </section>
    );
  }

  // Empty State
  if (sortedHotels.length === 0) {
    return (
      <section className="py-20">
        <div className="text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Hotels"
            className="w-40 mx-auto"
          />

          <h2 className="text-3xl font-bold mt-6">
            No Hotels Found
          </h2>

          <p className="text-gray-500 mt-3">
            We couldn't find any hotels matching your search.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-12">

      <div className="max-w-7xl mx-auto px-4">

        {/* Top Bar */}

        <div className="flex flex-col lg:flex-row justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold text-slate-800">
              Available Hotels
            </h2>

            <p className="text-gray-500 mt-2">
              {sortedHotels.length} Hotels Found
              {searchText && (
                <> for "<span className="font-semibold">{searchText}</span>"</>
              )}
            </p>
          </div>

          {/* Sort */}

          <div className="mt-5 lg:mt-0">

            <select
              className="select select-bordered rounded-xl"
              defaultValue={sortBy}
            >
              <option value="recommended">
                Recommended
              </option>

              <option value="price-low">
                Price (Low → High)
              </option>

              <option value="price-high">
                Price (High → Low)
              </option>

              <option value="rating">
                Highest Rated
              </option>

              <option value="reviews">
                Most Reviewed
              </option>

            </select>

          </div>

        </div>

        {/* Results Grid */}

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

          {sortedHotels.map((hotel) => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default HotelResults;