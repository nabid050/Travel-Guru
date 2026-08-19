import { Link, useParams } from "react-router-dom";
import {
  FaPlaneDeparture,
  FaPlaneArrival,
  FaSuitcaseRolling,
  FaWifi,
  FaUtensils,
  FaChair,
  FaClock,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";

import flights from "../../Data/flights";

const FlightDetails = () => {
  const { id } = useParams();

  const flight = flights.find((item) => item.id === Number(id));

  if (!flight) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Flight Not Found
        </h1>
      </div>
    );
  }

  return (
    <section className="bg-slate-100 min-h-screen">

      {/* Hero */}

      <div
        className="h-[350px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col justify-center text-white">

          <Link
            to="/flights"
            className="btn btn-sm w-fit mb-6"
          >
            <FaArrowLeft />
            Back
          </Link>

          <div className="flex items-center gap-5">

            <img
              src={flight.logo}
              alt={flight.airline}
              className="w-20 h-20 bg-white rounded-full p-3"
            />

            <div>

              <h1 className="text-5xl font-bold">
                {flight.airline}
              </h1>

              <p className="text-lg mt-2">
                Flight {flight.flightNo}
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Main */}

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left */}

          <div className="lg:col-span-2 space-y-8">

            {/* Timeline */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-8">
                Flight Schedule
              </h2>

              <div className="flex justify-between items-center">

                <div>

                  <h1 className="text-5xl font-bold">
                    {flight.departure}
                  </h1>

                  <p className="text-gray-500 mt-2">
                    {flight.from}
                  </p>

                  <p className="text-sm text-gray-400">
                    Departure
                  </p>

                </div>

                <div className="text-center">

                  <FaPlaneDeparture
                    className="text-4xl mx-auto text-[#122B8F]"
                  />

                  <p className="mt-3">
                    {flight.duration}
                  </p>

                  <p className="text-green-600 font-semibold">
                    {flight.stops}
                  </p>

                </div>

                <div className="text-right">

                  <h1 className="text-5xl font-bold">
                    {flight.arrival}
                  </h1>

                  <p className="text-gray-500 mt-2">
                    {flight.to}
                  </p>

                  <p className="text-sm text-gray-400">
                    Arrival
                  </p>

                </div>

              </div>

            </div>

            {/* Flight Features */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-8">
                Flight Features
              </h2>

              <div className="grid md:grid-cols-2 gap-5">

                <div className="flex gap-3 items-center">
                  <FaSuitcaseRolling className="text-[#122B8F]" />
                  <span>Baggage: {flight.baggage}</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaWifi className="text-[#122B8F]" />
                  <span>
                    {flight.wifi ? "Wi-Fi Available" : "No Wi-Fi"}
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaUtensils className="text-[#122B8F]" />
                  <span>
                    {flight.meal ? "Complimentary Meal" : "No Meal"}
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaChair className="text-[#122B8F]" />
                  <span>{flight.cabin}</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaClock className="text-[#122B8F]" />
                  <span>{flight.duration}</span>
                </div>

                <div className="flex gap-3 items-center">
                  <FaCheckCircle className="text-green-600" />
                  <span>{flight.refund}</span>
                </div>

              </div>

            </div>

            {/* Fare Rules */}

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-2xl font-bold mb-6">
                Fare Rules
              </h2>

              <ul className="space-y-3 list-disc list-inside text-gray-600">

                <li>Free cabin baggage included.</li>

                <li>
                  Checked baggage according to airline policy.
                </li>

                <li>
                  Online check-in available 24 hours before departure.
                </li>

                <li>
                  Refund policy depends on selected fare.
                </li>

                <li>
                  Seat selection available during booking.
                </li>

              </ul>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">

              <h2 className="text-3xl font-bold text-[#122B8F]">
                Booking Summary
              </h2>

              <div className="space-y-5 mt-8">

                <div className="flex justify-between">
                  <span>Airline</span>
                  <strong>{flight.airline}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Cabin</span>
                  <strong>{flight.cabin}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Baggage</span>
                  <strong>{flight.baggage}</strong>
                </div>

                <div className="flex justify-between">
                  <span>Seats Left</span>
                  <strong>{flight.seats}</strong>
                </div>

                <div className="divider"></div>

                <div className="flex justify-between text-2xl">

                  <span>Total</span>

                  <strong className="text-[#122B8F]">
                    ${flight.price}
                  </strong>

                </div>

              </div>

              <button className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white w-full mt-8">

                Book Flight

              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default FlightDetails;