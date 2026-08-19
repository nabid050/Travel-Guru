import FlightCard from "./../FlightCard/FlightCard";

const FlightResults = ({ flights }) => {
  if (!flights || flights.length === 0) {
    return (
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 text-center">

          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png"
            alt="No Flights"
            className="w-40 mx-auto"
          />

          <h2 className="text-4xl font-bold mt-8">
            No Flights Found
          </h2>

          <p className="text-gray-500 mt-3">
            Try changing your destination or departure date.
          </p>

        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-slate-100">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex justify-between items-center mb-8">

          <div>

            <h2 className="text-4xl font-bold text-[#122B8F]">
              Available Flights
            </h2>

            <p className="text-gray-500 mt-2">
              {flights.length} flights available
            </p>

          </div>

        </div>

        <div className="space-y-6">

          {flights.map((flight) => (
            <FlightCard
              key={flight.id}
              flight={flight}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FlightResults;