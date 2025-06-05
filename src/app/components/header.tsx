import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0A3D62] to-cyan-700 text-white text-sm ">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 sm:gap-3">
          <span className="font-semibold">Follow us:</span>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaFacebook />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-yellow-300 transition">
            <FaYoutube />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm">
          <div className="flex items-center gap-1">
            <MdCall className="text-base" />
            <span>+97798000000</span>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-base" />
            <span>Lumbinieng2048@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
