import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-cyan-700 text-white text-sm">
      <div className="max-w-screen-xl mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center gap-3">
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

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-1">
            <MdCall className="text-lg" />
            <span>+97798000000</span>
          </div>
          <div className="flex items-center gap-1">
            <MdEmail className="text-lg" />
            <span>Lumbinieng2048@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
