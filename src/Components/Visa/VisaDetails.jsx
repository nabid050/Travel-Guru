import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaClock,
  FaMoneyBillWave,
  FaPassport,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

import visaData from "../../Data/visaData";

const VisaDetails = () => {
  const { slug } = useParams();

  const visa = visaData.find((item) => item.slug === slug);

  if (!visa) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">Visa Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* Hero */}

      <div className="relative">

        <img
          src={visa.image}
          alt={visa.country}
          className="w-full h-[450px] object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center">

          <div className="max-w-7xl mx-auto px-4 text-white">

            <Link
              to="/visa"
              className="btn btn-sm bg-white text-black border-none"
            >
              <FaArrowLeft />
              Back
            </Link>

            <h1 className="text-5xl font-bold mt-6">
              {visa.country}
            </h1>

            <p className="text-xl mt-3">
              {visa.visaType}
            </p>

          </div>

        </div>

      </div>

      {/* Content */}

      <div className="max-w-7xl mx-auto px-4 py-14">

        <div className="grid lg:grid-cols-3 gap-10">

          {/* Left */}

          <div className="lg:col-span-2">

            <div className="bg-white rounded-3xl shadow-lg p-8">

              <h2 className="text-3xl font-bold text-[#122B8F] mb-6">
                Visa Overview
              </h2>

              <p className="text-gray-600 leading-8">
                {visa.description}
              </p>

            </div>

            {/* Documents */}

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

              <h2 className="text-3xl font-bold text-[#122B8F] mb-6">
                Required Documents
              </h2>

              <div className="grid md:grid-cols-2 gap-4">

                {visa.requirements.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-xl"
                  >
                    <FaCheckCircle className="text-green-600" />

                    <span>{item}</span>

                  </div>
                ))}

              </div>

            </div>

            {/* FAQ */}

            <div className="bg-white rounded-3xl shadow-lg p-8 mt-8">

              <h2 className="text-3xl font-bold text-[#122B8F] mb-6">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">

                <div className="collapse collapse-arrow bg-base-200">

                  <input type="radio" name="faq" defaultChecked />

                  <div className="collapse-title font-semibold">
                    How long does the visa process take?
                  </div>

                  <div className="collapse-content">
                    Usually {visa.processing}, depending on embassy processing.
                  </div>

                </div>

                <div className="collapse collapse-arrow bg-base-200">

                  <input type="radio" name="faq" />

                  <div className="collapse-title font-semibold">
                    Can I apply online?
                  </div>

                  <div className="collapse-content">
                    Yes. Submit your application and required documents online.
                  </div>

                </div>

                <div className="collapse collapse-arrow bg-base-200">

                  <input type="radio" name="faq" />

                  <div className="collapse-title font-semibold">
                    Is travel insurance required?
                  </div>

                  <div className="collapse-content">
                    Travel insurance is recommended and may be mandatory depending on the destination.
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <div className="bg-white rounded-3xl shadow-xl p-8 sticky top-24">

              <h2 className="text-3xl font-bold text-[#122B8F] mb-6">
                Visa Information
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between">

                  <span className="flex items-center gap-2">
                    <FaMoneyBillWave />
                    Fee
                  </span>

                  <strong>{visa.fee}</strong>

                </div>

                <div className="flex justify-between">

                  <span className="flex items-center gap-2">
                    <FaClock />
                    Processing
                  </span>

                  <strong>{visa.processing}</strong>

                </div>

                <div className="flex justify-between">

                  <span className="flex items-center gap-2">
                    <FaPassport />
                    Validity
                  </span>

                  <strong>{visa.validity}</strong>

                </div>

                <div className="flex justify-between">

                  <span className="flex items-center gap-2">
                    <FaGlobe />
                    Stay
                  </span>

                  <strong>{visa.stay}</strong>

                </div>

              </div>

              <Link
                to={`/visa/apply/${visa.slug}`}
                className="btn bg-[#122B8F] hover:bg-[#0f2377] text-white border-none w-full mt-10"
              >
                Apply Now
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default VisaDetails;