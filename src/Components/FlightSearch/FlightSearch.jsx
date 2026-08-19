import { useState } from "react";
import {
  FaExchangeAlt,
  FaPlus,
  FaTimes,
  FaSearch,
  FaPlaneDeparture,
  FaUserFriends,
} from "react-icons/fa";

const FlightSearch = ({ onSearch }) => {
  const [tripType, setTripType] = useState("oneway");

  const [segments, setSegments] = useState([
    {
      from: "",
      to: "",
      departure: "",
      returnDate: "",
    },
  ]);

  const [travellers, setTravellers] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    cabin: "Economy",
  });

  const addSegment = () => {
    setSegments([
      ...segments,
      {
        from: "",
        to: "",
        departure: "",
        returnDate: "",
      },
    ]);
  };

  const removeSegment = (index) => {
    if (segments.length === 1) return;

    setSegments(segments.filter((_, i) => i !== index));
  };

  const updateSegment = (index, field, value) => {
    const updated = [...segments];
    updated[index][field] = value;
    setSegments(updated);
  };

  const swapAirports = (index) => {
    const updated = [...segments];

    const temp = updated[index].from;

    updated[index].from = updated[index].to;
    updated[index].to = temp;

    setSegments(updated);
  };

  const searchFlights = () => {
    onSearch({
      tripType,
      travellers,
      segments,
    });
  };

  return (
    <section className="bg-white rounded-3xl shadow-2xl p-8">

      {/* Trip Type */}

      <div className="flex gap-3 flex-wrap">

        <button
          onClick={() => {
            setTripType("oneway");
            setSegments([{ from: "", to: "", departure: "", returnDate: "" }]);
          }}
          className={`btn rounded-full ${
            tripType === "oneway"
              ? "bg-green-100 text-green-700"
              : "btn-ghost"
          }`}
        >
          One Way
        </button>

        <button
          onClick={() => {
            setTripType("roundtrip");
            setSegments([{ from: "", to: "", departure: "", returnDate: "" }]);
          }}
          className={`btn rounded-full ${
            tripType === "roundtrip"
              ? "bg-green-100 text-green-700"
              : "btn-ghost"
          }`}
        >
          Round Trip
        </button>

        <button
          onClick={() => {
            setTripType("multicity");
            if (segments.length === 1) {
              setSegments([
                { from: "", to: "", departure: "", returnDate: "" },
                { from: "", to: "", departure: "", returnDate: "" },
              ]);
            }
          }}
          className={`btn rounded-full ${
            tripType === "multicity"
              ? "bg-green-100 text-green-700"
              : "btn-ghost"
          }`}
        >
          Multi City
        </button>

      </div>

      {/* Flight Rows */}

      <div className="space-y-5 mt-8">

        {segments.map((segment, index) => (
          <div
            key={index}
            className="grid lg:grid-cols-12 gap-3 items-center"
          >
            {/* From */}

            <input
              type="text"
              placeholder="From"
              className="input input-bordered lg:col-span-3"
              value={segment.from}
              onChange={(e) =>
                updateSegment(index, "from", e.target.value)
              }
            />

            {/* Swap */}

            <button
              className="btn btn-circle"
              onClick={() => swapAirports(index)}
            >
              <FaExchangeAlt />
            </button>

            {/* To */}

            <input
              type="text"
              placeholder="To"
              className="input input-bordered lg:col-span-3"
              value={segment.to}
              onChange={(e) =>
                updateSegment(index, "to", e.target.value)
              }
            />

            {/* Departure */}

            <input
              type="date"
              className="input input-bordered lg:col-span-2"
              value={segment.departure}
              onChange={(e) =>
                updateSegment(index, "departure", e.target.value)
              }
            />

            {/* Return */}

            {tripType === "roundtrip" && (
              <input
                type="date"
                className="input input-bordered lg:col-span-2"
                value={segment.returnDate}
                onChange={(e) =>
                  updateSegment(index, "returnDate", e.target.value)
                }
              />
            )}

            {/* Remove */}

            {tripType === "multicity" && (
              <button
                className="btn btn-circle btn-error"
                onClick={() => removeSegment(index)}
              >
                <FaTimes />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Controls */}

      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 gap-5">

        <button
          onClick={addSegment}
          disabled={tripType !== "multicity"}
          className="btn btn-outline border-green-600 text-green-600"
        >
          <FaPlus />
          Add Flight
        </button>

        <div className="flex flex-wrap gap-4 items-center">

          {/* Adults */}

          <select
            className="select select-bordered"
            value={travellers.adults}
            onChange={(e) =>
              setTravellers({
                ...travellers,
                adults: Number(e.target.value),
              })
            }
          >
            {[1,2,3,4,5,6].map((n) => (
              <option key={n} value={n}>
                {n} Adult{n > 1 && "s"}
              </option>
            ))}
          </select>

          {/* Children */}

          <select
            className="select select-bordered"
            value={travellers.children}
            onChange={(e) =>
              setTravellers({
                ...travellers,
                children: Number(e.target.value),
              })
            }
          >
            {[0,1,2,3,4].map((n) => (
              <option key={n} value={n}>
                {n} Child{n !== 1 && "ren"}
              </option>
            ))}
          </select>

          {/* Infants */}

          <select
            className="select select-bordered"
            value={travellers.infants}
            onChange={(e) =>
              setTravellers({
                ...travellers,
                infants: Number(e.target.value),
              })
            }
          >
            {[0,1,2].map((n) => (
              <option key={n} value={n}>
                {n} Infant{n !== 1 && "s"}
              </option>
            ))}
          </select>

          {/* Cabin */}

          <select
            className="select select-bordered"
            value={travellers.cabin}
            onChange={(e) =>
              setTravellers({
                ...travellers,
                cabin: e.target.value,
              })
            }
          >
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>

          <button
            onClick={searchFlights}
            className="btn bg-green-600 hover:bg-green-700 text-white px-10"
          >
            <FaSearch />
            Search
          </button>

        </div>

      </div>

    </section>
  );
};

export default FlightSearch;