import { GiMailbox } from "react-icons/gi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A3D62] text-white">
      <div className="bg-[#145374] py-10 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="flex items-center space-x-4">
            <GiMailbox className="text-5xl text-white" />
            <div>
              <h2 className="text-2xl font-bold">Subscribe for Newsletter</h2>
              <p className="text-sm text-gray-200">
                Manage Your Business With Our Software
              </p>
            </div>
          </div>
          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Email Address..."
              className="w-full py-3 px-5 pr-36 rounded shadow-md text-black focus:outline-none bg-white"
            />
            <button className="absolute top-1/2 -translate-y-1/2 right-1 bg-[#145374] text-white font-semibold px-5 py-2 rounded">
              Subscribe Now
            </button>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 md:px-10 lg:px-20 bg-[#0A3D62] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-sm text-gray-300 mb-4">
              It came into existence in 2000 A.D. in the name of Lumbini
              Engineering College with the effort of a team consisting of
              members having long experience of and dedication to modern,
              scientific and technical education to decentralize engineering
              education and to reduce the compulsion of going abroad for
              technical education. Subsequently, as the part of academic
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Our Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Academics</h3>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <p>B.E. In Computer</p>
              </div>
              <div>
                <p>M Sc (Construction)</p>
              </div>
              <div>
                <p>(Management) 2 Years Program</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />{" "}
                <span>Tilottama-7, Bhalwari, Rupandehi, Nepal</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone /> <span>071-561030, 561959</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />{" "}
                <span>lumbiniec@gmail.com lec@lumbini.edu.np</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
