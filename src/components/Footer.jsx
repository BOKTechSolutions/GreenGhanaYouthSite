import GGYI_logo from "../assets/images/GGYI_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10">
          {/* NGO Info */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={GGYI_logo}
                alt="GGYI Logo"
                className="w-12 h-12 rounded-full"
              />

              <h2 className="text-lg font-bold text-white">
                Green Ghana Youth Initiative
              </h2>
            </div>

            <p className="mt-5 text-sm leading-7">
              Green Ghana Youth Initiative is committed to promoting
              environmental sustainability through tree planting, climate
              education, and youth empowerment across Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-green-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5">Contact</h3>

            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-3">
                <FaEnvelope />
                info@greenghanayouthinitiative.org
              </p>

              <p className="flex items-center gap-3">
                <FaPhoneAlt />
                +233 20 632 8990 / 53 489 1471
              </p>

              <p>Kwahu West Nkawkaw Nusta , Ghana</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-white font-semibold mb-5">Follow Us</h3>

            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-green-400">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:text-green-400">
                <FaInstagram />
              </a>

              <a href="#" className="hover:text-green-400">
                <FaLinkedinIn />
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-medium">Registration Status</h4>

              <p className="mt-2 text-sm text-yellow-400">
                This organization is currently undergoing its official
                registration process.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Green Ghana Youth Initiative. All
            Rights Reserved.
          </p>

          <p className="text-sm text-gray-400">
            Built by{" "}
            <a
              href="https://boktechgh.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-300 underline transition"
            >
              BOKEDGE TECH SOLUTIONS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
