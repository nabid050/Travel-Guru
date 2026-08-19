import { useParams, Link } from "react-router-dom";
import tourPackages from "../../Data/tourPackages";
import {
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaStar,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

const TourDetails = () => {
  const { slug } = useParams();

  const tour = tourPackages.find((item) => item.slug === slug);

  if (!tour) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-4xl font-bold">Tour Not Found</h2>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Hero */}

      <div className="relative">

        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-4 text-white">

            <Link
              to="/tours"
              className="btn btn-sm bg-white text-black border-none"
            >
              <FaArrowLeft />
              Back
            </Link>

            <h1 className="text-5xl font-bold mt-6">
              {tour.title}
            </h1>

            <div className="flex flex-wrap gap-6 mt-6">

              <span className="flex items-center gap-2">
                <FaMapMarkerAlt />
                {tour.country}
              </span>

              <span className="flex items-center gap-2">
                <FaClock />
                {tour.duration}
              </span>

              <span className="flex items-center gap-2">
                <FaUsers />
                {tour.groupSize}
              </span>

              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                {tour.rating}
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-4 py-14">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            <h2 className="text-4xl font-bold">
              Tour Overview
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              {tour.description}
            </p>

            <h3 className="text-3xl font-bold mt-10">
              Tour Highlights
            </h3>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              {tour.highlights.map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow p-4 flex gap-3"
                >
                  <FaCheckCircle className="text-green-600 mt-1" />
                  <span>{item}</span>
                </div>
              ))}

            </div>

            {tour.includes && (
              <>
                <h3 className="text-3xl font-bold mt-12">
                  Included
                </h3>

                <ul className="mt-6 space-y-3">

                  {tour.includes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3"
                    >
                      <FaCheckCircle className="text-green-600 mt-1" />
                      {item}
                    </li>
                  ))}

                </ul>
              </>
            )}

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">

              <h2 className="text-5xl font-bold text-[#122B8F]">
                ${tour.price}
              </h2>

              <p className="text-gray-500">
                Per Person
              </p>

              <button className="btn w-full mt-8 bg-[#122B8F] hover:bg-[#0f2377] border-none text-white">
                Book Now
              </button>

              <div className="divider"></div>

              <div className="space-y-4">

                <div className="flex justify-between">
                  <span>Destination</span>
                  <strong>{tour.country}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Duration</span>
                  <strong>{tour.duration}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Group</span>
                  <strong>{tour.groupSize}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Type</span>
                  <strong>{tour.type}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Rating</span>
                  <strong>{tour.rating} ⭐</strong>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TourDetails;