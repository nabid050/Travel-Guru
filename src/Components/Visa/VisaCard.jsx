import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaClock,
  FaPassport,
  FaMoneyBillWave,
  FaArrowRight,
} from "react-icons/fa";

const VisaCard = ({ visa }) => {
  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">

      {/* Image */}

      <div className="relative overflow-hidden">

        <img
          src={visa.image}
          alt={visa.country}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

        <span className="absolute top-4 left-4 bg-[#122B8F] text-white px-4 py-2 rounded-full text-sm font-semibold">
          {visa.visaType}
        </span>

      </div>

      {/* Body */}

      <div className="p-6">

        <h2 className="text-3xl font-bold text-[#122B8F]">
          {visa.country}
        </h2>

        <p className="text-gray-600 mt-3 line-clamp-3">
          {visa.description}
        </p>

        {/* Visa Info */}

        <div className="grid grid-cols-2 gap-4 mt-6">

          <div className="bg-slate-100 rounded-xl p-4">

            <div className="flex items-center gap-2 text-[#122B8F]">

              <FaMoneyBillWave />

              <span className="font-semibold">
                Visa Fee
              </span>

            </div>

            <h4 className="font-bold text-xl mt-2">
              {visa.fee}
            </h4>

          </div>

          <div className="bg-slate-100 rounded-xl p-4">

            <div className="flex items-center gap-2 text-[#122B8F]">

              <FaClock />

              <span className="font-semibold">
                Processing
              </span>

            </div>

            <h4 className="font-bold text-xl mt-2">
              {visa.processing}
            </h4>

          </div>

          <div className="bg-slate-100 rounded-xl p-4">

            <div className="flex items-center gap-2 text-[#122B8F]">

              <FaPassport />

              <span className="font-semibold">
                Validity
              </span>

            </div>

            <h4 className="font-bold text-xl mt-2">
              {visa.validity}
            </h4>

          </div>

          <div className="bg-slate-100 rounded-xl p-4">

            <div className="flex items-center gap-2 text-[#122B8F]">

              <FaGlobe />

              <span className="font-semibold">
                Stay
              </span>

            </div>

            <h4 className="font-bold text-xl mt-2">
              {visa.stay}
            </h4>

          </div>

        </div>

        {/* Requirements */}

        <div className="mt-8">

          <h3 className="font-bold text-lg mb-4">
            Required Documents
          </h3>

          <div className="space-y-2">

            {visa.requirements.slice(0, 4).map((item) => (
              <div
                key={item}
                className="flex items-center gap-2"
              >
                <span className="text-green-600 font-bold">
                  ✓
                </span>

                <span className="text-gray-600">
                  {item}
                </span>
              </div>
            ))}

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-8">

          <Link
            to={`/visa/${visa.slug}`}
            className="btn flex-1 bg-[#122B8F] hover:bg-[#0f2377] border-none text-white rounded-xl"
          >
            View Details
          </Link>

          <Link
            to={`/visa/apply/${visa.slug}`}
            className="btn btn-outline border-[#122B8F] text-[#122B8F] hover:bg-[#122B8F] hover:text-white rounded-xl"
          >
            Apply
            <FaArrowRight />
          </Link>

        </div>

      </div>

    </div>
  );
};

export default VisaCard;