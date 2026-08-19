import React from 'react';

const TourPartners = () => {
const partners = [
  {
    name: "Emirates",
    logo: "https://cdn.simpleicons.org/emirates/D71920",
  },
  {
    name: "Qatar Airways",
    logo: "https://cdn.simpleicons.org/qatarairways/5C0D34",
  },
  {
    name: "Lufthansa",
    logo: "https://cdn.simpleicons.org/lufthansa/05164D",
  },
  {
    name: "British Airways",
    logo: "https://cdn.simpleicons.org/britishairways/075AAA",
  },
  {
    name: "Airbnb",
    logo: "https://cdn.simpleicons.org/airbnb/FF5A5F",
  },
  {
    name: "Booking.com",
    logo: "https://cdn.simpleicons.org/bookingdotcom/003580",
  },
  {
    name: "Expedia",
    logo: "https://cdn.simpleicons.org/expedia/191E3B",
  },
  {
    name: "Tripadvisor",
    logo: "https://cdn.simpleicons.org/tripadvisor/34E0A1",
  },
  {
    name: "Marriott",
    logo: "https://cdn.simpleicons.org/marriott/AE8B5D",
  },
  {
    name: "Hilton",
    logo: "https://cdn.simpleicons.org/hilton/124D97",
  },
];
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#122B8F]">
            Our Tour Partners
          </h2>

          <p className="mt-3 text-gray-600">
            Trusted by the world's leading airlines and hotels.
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-20 w-max">
            {[...partners, ...partners, ...partners].map(
              (partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center min-w-55"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              )
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TourPartners;