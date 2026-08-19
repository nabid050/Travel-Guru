import { Link } from "react-router-dom";
import {
  FaPlane,
  FaSuitcaseRolling,
  FaWifi,
  FaUtensils,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const FlightCard = ({ flight }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 p-6">

      <div className="grid lg:grid-cols-12 gap-6 items-center">

        {/* Airline */}

        <div className="lg:col-span-2 flex items-center gap-4">

          <img
            src={flight.logo}
            alt={flight.airline}
            className="w-16 h-16 object-contain"
          />

          <div>

            <h3 className="font-bold text-lg">
              {flight.airline}
            </h3>

            <p className="text-sm text-gray-500">
              {flight.flightNo}
            </p>

          </div>

        </div>

        {/* Flight Time */}

        <div className="lg:col-span-4">

          <div className="flex justify-between items-center">

            <div>

              <h2 className="text-3xl font-bold">
                {flight.departure}
              </h2>

              <p className="text-gray-500">
                {flight.from}
              </p>

            </div>

            <div className="text-center">

              <FaPlane className="mx-auto text-[#122B8F]" />

              <p className="text-sm text-gray-500 mt-2">
                {flight.duration}
              </p>

              <p className="text-green-600 font-semibold">
                {flight.stops}
              </p>

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                {flight.arrival}
              </h2>

              <p className="text-gray-500">
                {flight.to}
              </p>

            </div>

          </div>

        </div>

        {/* Features */}

        <div className="lg:col-span-3">

          <div className="grid grid-cols-2 gap-3">

            <div className="flex items-center gap-2">

              <FaSuitcaseRolling />

              <span>{flight.baggage}</span>

            </div>

            <div className="flex items-center gap-2">

              <FaWifi />

              <span>
                {flight.wifi ? "Wi-Fi" : "No Wi-Fi"}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <FaUtensils />

              <span>
                {flight.meal ? "Meal" : "No Meal"}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <FaClock />

              <span>{flight.cabin}</span>

            </div>

          </div>

          <div className="mt-4">

            <span className="badge badge-success">
              {flight.refund}
            </span>

          </div>

        </div>

        {/* Price */}

        <div className="lg:col-span-3 text-right">

          <p className="text-gray-500">
            From
          </p>

          <h2 className="text-4xl font-bold text-[#122B8F]">
            ${flight.price}
          </h2>

          <p className="text-green-600 flex justify-end items-center gap-2 mt-2">

            <FaCheckCircle />

            {flight.seats} seats left

          </p>

          <div className="flex gap-3 justify-end mt-5">

            <Link
              to={`/flights/${flight.id}`}
              className="btn btn-outline border-[#122B8F] text-[#122B8F]"
            >
              Details
            </Link>

            <button className="btn bg-[#122B8F] hover:bg-[#0f2377] text-white border-none">
              Book Now
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default FlightCard;