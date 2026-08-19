import { useState } from "react";
import {
  FaSearch,
  FaGlobe,
  FaPassport,
  FaDollarSign,
  FaClock,
} from "react-icons/fa";

const VisaSearch = ({ allVisas, onSearch }) => {
  const [country, setCountry] = useState("");
  const [visaType, setVisaType] = useState("");
  const [maxFee, setMaxFee] = useState("");
  const [processing, setProcessing] = useState("");

  const handleSearch = () => {
    const filtered = allVisas.filter((visa) => {
      const matchCountry =
        country === "" ||
        visa.country.toLowerCase().includes(country.toLowerCase());

      const matchVisa =
        visaType === "" ||
        visa.visaType.toLowerCase().includes(visaType.toLowerCase());

      const fee = Number(String(visa.fee).replace(/[^\d]/g, ""));

      const matchFee =
        maxFee === "" || fee <= Number(maxFee);

      const matchProcessing =
        processing === "" ||
        visa.processing.toLowerCase().includes(processing.toLowerCase());

      return (
        matchCountry &&
        matchVisa &&
        matchFee &&
        matchProcessing
      );
    });

    onSearch(filtered);
  };

  const handleReset = () => {
    setCountry("");
    setVisaType("");
    setMaxFee("");
    setProcessing("");
    onSearch(allVisas);
  };

  return (
    <section className="bg-gradient-to-r from-[#122B8F] to-[#1F5DE3] py-16">

      <div className="max-w-7xl mx-auto px-4">

        <div className="bg-white rounded-3xl shadow-2xl p-8">

          <div className="text-center mb-10">

            <h2 className="text-4xl font-bold text-[#122B8F]">
              Find Your Visa
            </h2>

            <p className="text-gray-500 mt-3">
              Search visa requirements and processing information.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Country */}

            <div>
              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaGlobe />
                Country
              </label>

              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="USA, Canada..."
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>

            {/* Visa Type */}

            <div>
              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaPassport />
                Visa Type
              </label>

              <select
                className="select select-bordered w-full"
                value={visaType}
                onChange={(e) => setVisaType(e.target.value)}
              >
                <option value="">All Visa Types</option>
                <option value="Tourist">Tourist</option>
                <option value="Visitor">Visitor</option>
                <option value="Student">Student</option>
                <option value="Work">Work</option>
                <option value="Business">Business</option>
              </select>
            </div>

            {/* Max Fee */}

            <div>
              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaDollarSign />
                Maximum Fee
              </label>

              <select
                className="select select-bordered w-full"
                value={maxFee}
                onChange={(e) => setMaxFee(e.target.value)}
              >
                <option value="">Any Fee</option>
                <option value="100">$100</option>
                <option value="150">$150</option>
                <option value="200">$200</option>
                <option value="300">$300</option>
              </select>
            </div>

            {/* Processing */}

            <div>
              <label className="font-semibold flex items-center gap-2 mb-2">
                <FaClock />
                Processing
              </label>

              <select
                className="select select-bordered w-full"
                value={processing}
                onChange={(e) => setProcessing(e.target.value)}
              >
                <option value="">Any Time</option>
                <option value="15">15 Days</option>
                <option value="20">20 Days</option>
                <option value="28">28 Days</option>
                <option value="3 Weeks">3 Weeks</option>
              </select>
            </div>

          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center mt-10">

            <button
              onClick={handleSearch}
              className="btn bg-[#122B8F] hover:bg-[#0f2377] border-none text-white px-8"
            >
              <FaSearch />
              Search Visa
            </button>

            <button
              onClick={handleReset}
              className="btn btn-outline border-[#122B8F] text-[#122B8F]"
            >
              Reset Filters
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default VisaSearch;