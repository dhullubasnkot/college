import { GiMailbox } from "react-icons/gi";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="bg-[#145374] py-10 px-4 sm:px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4 text-center lg:text-left">
            <GiMailbox className="text-4xl sm:text-5xl text-white" />
            <div>
              <h2 className="text-lg sm:text-2xl font-bold">
                Subscribe for Newsletter
              </h2>
              <p className="text-sm text-gray-200">
                Get Notified From College Department
              </p>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address..."
              className="w-full py-3 px-5 pr-36 rounded-full shadow-md text-black focus:outline-none bg-white text-sm"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-[#145374] hover:bg-[#0f2c4c] text-white font-semibold px-5 py-2 rounded-full text-sm">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300">
              Lumbini Engineering College was established in 2000 A.D. to
              decentralize modern engineering education and reduce dependency on
              foreign education through dedicated academic excellence.
            </p>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Our Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {["Home", "About", "Courses", "Contact Us"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">Academics</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>B.E. in Computer</li>
              <li>M.Sc. in Construction</li>
              <li>Management (2-Year Program)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1" />
                <span>Tilottama-7, Bhalwari, Rupandehi, Nepal</span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone />
                <span>071-561030, 561959</span>
              </li>
              <li className="flex items-start gap-2">
                <FaEnvelope className="mt-1" />
                <span>
                  lumbiniec@gmail.com
                  <br />
                  lec@lumbini.edu.np
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
