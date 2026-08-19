import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaStar,
  FaWifi,
  FaSwimmingPool,
  FaDumbbell,
  FaParking,
  FaUtensils,
  FaShuttleVan,
} from "react-icons/fa";

const HotelCard = ({ hotel }) => {
  const amenityIcons = {
    "Free WiFi": <FaWifi />,
    Pool: <FaSwimmingPool />,
    "Infinity Pool": <FaSwimmingPool />,
    Spa: "💆",
    Gym: <FaDumbbell />,
    "Fitness Center": <FaDumbbell />,
    Restaurant: <FaUtensils />,
    "Free Parking": <FaParking />,
    Parking: <FaParking />,
    "Airport Shuttle": <FaShuttleVan />,
    "Airport Transfer": <FaShuttleVan />,
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 group">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={hotel.image}
          alt={hotel.name}
          className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
        />

        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full font-semibold text-sm">
          {hotel.discount}% OFF
        </div>

        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow font-bold">
          ⭐ {hotel.rating}
        </div>
      </div>

      {/* Body */}
      <div className="p-6">
        {/* Hotel Name */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              {hotel.name}
            </h2>

            <div className="flex items-center text-amber-500 mt-2">
              {[...Array(hotel.stars)].map((_, index) => (
                <FaStar key={index} className="mr-1" />
              ))}
            </div>

            <p className="text-gray-500 mt-2 flex items-center gap-2">
              <FaMapMarkerAlt />
              {hotel.city}, {hotel.country}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">
              {hotel.reviews.toLocaleString()} Reviews
            </p>

            <h2 className="text-3xl font-bold text-[#122B8F] mt-2">
              ${hotel.price}
            </h2>

            <p className="text-xs text-gray-500">per night</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 mt-5 line-clamp-3">
          {hotel.description}
        </p>

        {/* Amenities */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
          {hotel.amenities.slice(0, 8).map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 bg-slate-100 rounded-xl px-3 py-2 text-sm"
            >
              <span>{amenityIcons[item] || "✔"}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-4">
          <div className="space-y-1">
            <p className="text-green-600 font-semibold">
              ✓ Free Cancellation
            </p>

            <p className="text-green-600 font-semibold">
              ✓ Breakfast Included
            </p>
          </div>

          <Link
            to={`/hotels/${hotel.slug}`}
            className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white px-8 rounded-xl"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;