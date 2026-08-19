// src/Components/HomeCards/HomeCards.jsx

import { Link } from "react-router-dom";
import tours from "../../Data/tours";

const HomeCards = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#122B8F]">
            Popular Destinations
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Discover unforgettable journeys to the world's most popular
            travel destinations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div
              key={tour.id}
              className="card bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <figure className="h-60 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.country}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </figure>

              <div className="card-body">
                <h3 className="card-title text-[#122B8F] text-2xl">
                  {tour.country}
                </h3>

                <p className="text-gray-600">
                  {tour.shortDescription}
                </p>

                <div className="card-actions justify-end mt-4">
                  <Link
                    to={`/tour/${tour.slug}`}
                    className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white"
                  >
                    Explore Tour
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeCards;