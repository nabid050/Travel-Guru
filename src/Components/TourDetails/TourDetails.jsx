// src/Components/TourDetails/TourDetails.jsx

import { useParams } from "react-router-dom";
import tours from "../../Data/tours";

const TourDetails = () => {
  const { slug } = useParams();

  const tour = tours.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase()
  );

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">
          Tour Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <img
        src={tour.image}
        alt={tour.country}
        className="w-full h-[500px] object-cover rounded-xl"
      />

      <h1 className="text-5xl font-bold mt-8 text-[#122B8F]">
        {tour.country}
      </h1>

      <p className="mt-4 text-lg text-gray-600">
        {tour.overview}
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Travel Information</h2>

            <p>🌤 Best Time: {tour.bestTime}</p>
            <p>⏳ Duration: {tour.duration}</p>
            <p>💰 Budget: {tour.budget}</p>
            <p>🛂 Visa: {tour.visa}</p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Included Services</h2>

            {tour.includes?.map((item) => (
              <p key={item}>✓ {item}</p>
            ))}
          </div>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-8">

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Popular Cities</h2>

            {tour.cities?.map((city) => (
              <p key={city}>📍 {city}</p>
            ))}
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Top Attractions</h2>

            {tour.attractions?.map((place) => (
              <p key={place}>⭐ {place}</p>
            ))}
          </div>
        </div>

      </div>

      <div className="text-center mt-10">
        <button className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white px-10">
          Book Now
        </button>
      </div>

    </div>
  );
};

export default TourDetails;