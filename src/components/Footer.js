import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#111320] mt-auto">
      <div className="container mx-auto py-12 px-3">
        <div className="grid lg:grid-cols-4">
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-white mb-2">Learn More</h3>
            <ul className="mb-4">
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Ways We Help
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Quality Care
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Health Talk
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-white mb-2">About</h3>
            <ul className="mb-4">
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  For Organizations
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  For Care providers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Investors
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-bold text-white mb-2">Support</h3>
            <ul className="mb-4">
              <li>
                <a href="/contacts" className="text-white hover:text-amber-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Client Login
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Prescription Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Privacy Practices
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-amber-300">
                  Community Guidelines
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start justify-evenly">
            <img
              className="w-[200px] mb-2"
              src="img/telaq-logo-white.png"
              alt="telaq logo white letters"
            />
            <p className="text-footer-muted mb-4">
              Sem eleifend donec molestie, integer quisque orci aliquam.
            </p>
          </div>
        </div>
        <hr className="h-px bg-footer-muted border-0 my-4" />
        <div className="flex justify-between">
          <p className="text-footer-muted pt-4">
            Copyright &copy; {new Date().getFullYear()} TelaQ
          </p>
          <div className="flex items-center">
            <a href="#" className="text-footer-muted ml-4">
              <FaFacebook />
            </a>
            <a href="#" className="text-footer-muted ml-4">
              <FaTwitter />
            </a>
            <a href="#" className="text-footer-muted ml-4">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
