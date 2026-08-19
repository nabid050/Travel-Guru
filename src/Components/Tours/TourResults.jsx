import TourCard from "./TourCard";

const TourResults = ({ tours }) => {
  if (!tours || tours.length === 0) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Tours"
            className="w-40 mx-auto"
          />

          <h2 className="text-4xl font-bold mt-8 text-slate-800">
            No Tours Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your search destination or filters.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-50 py-14">

      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div>

            <h2 className="text-4xl font-bold text-slate-800">
              Available Tour Packages
            </h2>

            <p className="text-gray-500 mt-2">
              {tours.length} Premium Tours Available
            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {tours.map((tour) => (
            <TourCard
              key={tour.id}
              tour={tour}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default TourResults;