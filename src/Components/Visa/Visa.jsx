import { useState } from "react";
import visaData from "../../Data/visaData";
import VisaSearch from "./../Visa/VisaSearch";
import VisaResults from "./../Visa/VisaResults";

const Visa = () => {
  const [filteredVisas, setFilteredVisas] = useState(visaData);

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero */}

      <div className="bg-gradient-to-r from-[#122B8F] to-[#1F5DE3] text-white py-20">

        <div className="max-w-7xl mx-auto px-4 text-center">

          <h1 className="text-5xl font-bold">
            Visa Assistance
          </h1>

          <p className="mt-5 text-lg max-w-3xl mx-auto">
            Find visa requirements, compare processing times,
            explore visa fees, and apply online with confidence.
          </p>

        </div>

      </div>

      {/* Search */}

      <VisaSearch
        allVisas={visaData}
        onSearch={setFilteredVisas}
      />

      {/* Results */}

      <VisaResults
        visas={filteredVisas}
      />

    </div>
  );
};

export default Visa;