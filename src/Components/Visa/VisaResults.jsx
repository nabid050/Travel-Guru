import VisaCard from "./VisaCard";

const VisaResults = ({ visas }) => {
  if (!visas || visas.length === 0) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Visa Found"
            className="w-40 mx-auto"
          />

          <h2 className="text-4xl font-bold text-slate-800 mt-8">
            No Visa Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try searching for another country or visa type.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold text-slate-800">
              Available Visa Services
            </h2>

            <p className="text-gray-500 mt-2">
              {visas.length} Visa options available
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {visas.map((visa) => (
            <VisaCard
              key={visa.id}
              visa={visa}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default VisaResults;