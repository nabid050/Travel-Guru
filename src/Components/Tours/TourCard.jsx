import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaClock,
  FaStar,
  FaUsers,
} from "react-icons/fa";

const TourCard = ({ tour }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      {/* Image */}
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-60 object-cover hover:scale-105 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-[#122B8F] text-white px-4 py-1 rounded-full text-sm">
          {tour.type}
        </span>

        <span className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full flex items-center gap-1 text-sm font-semibold">
          <FaStar />
          {tour.rating}
        </span>
      </div>

      {/* Body */}
      <div className="p-6">

        <h2 className="text-2xl font-bold text-[#122B8F]">
          {tour.title}
        </h2>

        <p className="flex items-center gap-2 text-gray-500 mt-2">
          <FaMapMarkerAlt />
          {tour.country}
        </p>

        <p className="text-gray-600 mt-4 line-clamp-3">
          {tour.description}
        </p>

        {/* Info */}
        <div className="flex justify-between mt-6 text-gray-600">

          <div className="flex items-center gap-2">
            <FaClock />
            <span>{tour.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUsers />
            <span>{tour.groupSize}</span>
          </div>

        </div>

        {/* Highlights */}
        <div className="mt-6">

          <h4 className="font-semibold mb-2">
            Highlights
          </h4>

          <div className="flex flex-wrap gap-2">

            {tour.highlights.map((item, index) => (
              <span
                key={index}
                className="bg-slate-100 text-sm px-3 py-1 rounded-full"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-8">

          <div>

            <p className="text-gray-500 text-sm">
              Starting From
            </p>

            <h3 className="text-3xl font-bold text-[#122B8F]">
              ${tour.price}
            </h3>

          </div>

          <Link
            to={`/tours/${tour.slug}`}
            className="btn bg-[#122B8F] hover:bg-[#0f2377] text-white border-none rounded-xl"
          >
            View Details
          </Link>

        </div>

      </div>

    </div>
  );
};

export default TourCard;