import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPlane,
  FaHotel,
  FaPassport,
  FaMapMarkedAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Company Info */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Travel Guru
            </h2>

            <p className="leading-relaxed text-gray-400">
              Your trusted travel partner for flights, hotels, tours,
              visa assistance, and unforgettable travel experiences
              worldwide.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#122B8F] flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#122B8F] flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#122B8F] flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-700 hover:bg-[#122B8F] flex items-center justify-center transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
                <a href="/flights" className="hover:text-white">
                  Flights
                </a>
              </li>

              <li>
                <a href="/hotels" className="hover:text-white">
                  Hotels
                </a>
              </li>

              <li>
                <a href="/tours" className="hover:text-white">
                  Tour Packages
                </a>
              </li>

              <li>
                <a href="/visa" className="hover:text-white">
                  Visa Services
                </a>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Services
            </h3>

            <ul className="space-y-3">

              <li className="flex items-center gap-2">
                <FaPlane />
                Flight Booking
              </li>

              <li className="flex items-center gap-2">
                <FaHotel />
                Hotel Reservation
              </li>

              <li className="flex items-center gap-2">
                <FaMapMarkedAlt />
                Tour Packages
              </li>

              <li className="flex items-center gap-2">
                <FaPassport />
                Visa Assistance
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <p className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1" />
                Dhaka, Bangladesh
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                +880 1234-567890
              </p>

              <p className="flex items-center gap-3">
                <FaEnvelope />
                support@travelguru.com
              </p>

            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold text-xl mb-5">
              Newsletter
            </h3>

            <p className="text-gray-400 mb-4">
              Subscribe to receive travel deals, destination updates,
              and exclusive offers.
            </p>

            <form className="space-y-3">

              <input
                type="email"
                placeholder="Your Email Address"
                className="input input-bordered w-full bg-slate-800 border-slate-700 text-white"
              />

              <button
                type="submit"
                className="btn w-full bg-[#122B8F] hover:bg-[#0f2377] border-none text-white"
              >
                Subscribe
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700">

        <div className="max-w-7xl mx-auto px-4 py-5">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Travel Guru. All Rights Reserved.
            </p>

            <div className="flex flex-wrap justify-center gap-6 text-sm">

              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>

              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>

              <a href="#" className="hover:text-white">
                Refund Policy
              </a>

              <a href="#" className="hover:text-white">
                Support Center
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;