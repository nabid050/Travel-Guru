import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUserFriends,
  FaBed,
  FaSearch,
} from "react-icons/fa";

const HotelSearch = ({ hotels, onSearch }) => {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);
  const [rooms, setRooms] = useState(1);
  const [nationality, setNationality] = useState("Bangladesh");

  const handleSearch = () => {
    const filtered = hotels.filter((hotel) => {
      if (destination === "") return true;

      return (
        hotel.city.toLowerCase().includes(destination.toLowerCase()) ||
        hotel.country.toLowerCase().includes(destination.toLowerCase()) ||
        hotel.name.toLowerCase().includes(destination.toLowerCase())
      );
    });

    onSearch(filtered);
  };

  return (
    <section className="bg-gradient-to-r from-[#0f4c81] to-[#122B8F] py-14">
      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <h2 className="text-3xl font-bold text-center mb-8 text-[#122B8F]">
            Find Your Perfect Hotel
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-5">

            {/* Destination */}
            <div>
              <label className="font-semibold mb-2 flex items-center gap-2">
                <FaMapMarkerAlt />
                Destination
              </label>

              <input
                type="text"
                list="cities"
                placeholder="City or Hotel"
                className="input input-bordered w-full"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />

              <datalist id="cities">
                {hotels.map((hotel) => (
                  <option
                    key={hotel.id}
                    value={hotel.city}
                  />
                ))}
              </datalist>
            </div>

            {/* Check In */}
            <div>
              <label className="font-semibold mb-2 flex items-center gap-2">
                <FaCalendarAlt />
                Check In
              </label>

              <input
                type="date"
                className="input input-bordered w-full"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>

            {/* Check Out */}
            <div>
              <label className="font-semibold mb-2 flex items-center gap-2">
                <FaCalendarAlt />
                Check Out
              </label>

              <input
                type="date"
                className="input input-bordered w-full"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>

            {/* Guests */}
            <div>
              <label className="font-semibold mb-2 flex items-center gap-2">
                <FaUserFriends />
                Guests
              </label>

              <select
                className="select select-bordered w-full"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
              >
                {[1,2,3,4,5,6].map((g) => (
                  <option key={g}>{g}</option>
                ))}
              </select>
            </div>

            {/* Rooms */}
            <div>
              <label className="font-semibold mb-2 flex items-center gap-2">
                <FaBed />
                Rooms
              </label>

              <select
                className="select select-bordered w-full"
                value={rooms}
                onChange={(e) => setRooms(Number(e.target.value))}
              >
                {[1,2,3,4].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>

            {/* Nationality */}
            <div>
              <label className="font-semibold mb-2">
                Nationality
              </label>

              <select
                className="select select-bordered w-full"
                value={nationality}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option>Bangladesh</option>
                <option>India</option>
                <option>Singapore</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>United States</option>
              </select>
            </div>

          </div>

          <div className="text-center mt-10">
            <button
              onClick={handleSearch}
              className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white px-12 rounded-xl"
            >
              <FaSearch />
              Search Hotels
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HotelSearch;