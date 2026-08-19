const visaData = [
  {
    id: 1,
    slug: "usa-tourist-visa",
    country: "United States",
    visaType: "Tourist Visa (B1/B2)",
    image:
      "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=1200",
    fee: "$185",
    processing: "15-30 Days",
    validity: "10 Years",
    stay: "180 Days",
    description:
      "Visit the United States for tourism, business meetings, family visits, and short-term travel.",

    requirements: [
      "Valid Passport",
      "Passport Photo",
      "Bank Statement",
      "Employment Letter",
      "Travel Itinerary",
      "Hotel Booking",
    ],
  },

  {
    id: 2,
    slug: "uk-tourist-visa",
    country: "United Kingdom",
    visaType: "Standard Visitor Visa",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200",
    fee: "$145",
    processing: "3 Weeks",
    validity: "6 Months",
    stay: "180 Days",

    description:
      "Travel to England, Scotland, Wales and Northern Ireland for tourism or business.",

    requirements: [
      "Passport",
      "Financial Proof",
      "Employment Letter",
      "Invitation Letter",
      "Travel Insurance",
    ],
  },

  {
    id: 3,
    slug: "schengen-visa",
    country: "Schengen Area",
    visaType: "Schengen Tourist Visa",
    image:
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1200",
    fee: "€90",
    processing: "15 Days",
    validity: "90 Days",
    stay: "90 Days",

    description:
      "Travel freely across 29 Schengen countries with a single visa.",

    requirements: [
      "Passport",
      "Flight Booking",
      "Hotel Booking",
      "Travel Insurance",
      "Bank Statement",
    ],
  },

  {
    id: 4,
    slug: "australia-visitor-visa",
    country: "Australia",
    visaType: "Visitor Visa (600)",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1200",
    fee: "AUD 195",
    processing: "20 Days",
    validity: "12 Months",
    stay: "90 Days",

    description:
      "Travel Australia for tourism, visiting family or business activities.",

    requirements: [
      "Passport",
      "Financial Proof",
      "Employment Letter",
      "Health Insurance",
    ],
  },

  {
    id: 5,
    slug: "canada-tourist-visa",
    country: "Canada",
    visaType: "Temporary Resident Visa",

    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56cd1c5?w=1200",

    fee: "CAD 100",

    processing: "28 Days",

    validity: "10 Years",

    stay: "180 Days",

    description:
      "Visit Canada for tourism, family visits, and business trips.",

    requirements: [
      "Passport",
      "Bank Statement",
      "Employment Letter",
      "Travel History",
      "Invitation Letter",
    ],
  },
];

export default visaData;