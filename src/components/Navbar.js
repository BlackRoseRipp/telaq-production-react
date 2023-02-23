import { Fragment, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
//import Logo from "../public/img/QCARE_Logo.svg";
//import LogoWhite from "../public/img/QCARE_Logo_White.svg";
import NavButton from "./NavButton";
import { routes } from "./routes";

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollPosition = useScrollPosition();
  const size = useWindowSize();
  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <Fragment>
      <nav
        className={classNames(
          scrollPosition > 0
            ? "bg-white"
            : "md:bg-transparent bg-white md:border-transparent",
          "fixed w-full top-0 flex justify-between items-center transition-all z-50 border-b border-neutral-300"
        )}
      >
        <div className="lg:container flex flex-wrap justify-between items-center md:mx-auto w-full">
          <div className="p-4 rounded-b-xl bg-transparent xl:ml-32">
            <a href="/" className="flex items-center">
              <img
                src="img/telaq-logo.png"
                class="mr-3 w-52"
                alt="qcare-logo"
              />
            </a>
          </div>
          <button
            data-toggle="navbar"
            onClick={() => setExpanded(!expanded)}
            type="button"
            className="lg:hidden text-3xl mr-8"
            aria-controls="navbar"
            aria-expanded="false"
          >
            <GiHamburgerMenu />
          </button>
          <div
            className={classNames(
              expanded ? "max-h-[740px] border-b" : "max-h-0",
              size.height < 740
                ? "overflow-y-scroll overflow-x-hidden"
                : "overflow-hidden",
              "block lg:max-h-full w-fit lg:w-auto transition-all duration-700 lg:overflow-visible grow xl:mr-32 lg:border-0"
            )}
            id="navbar"
          >
            {size.width < 1024 ? (
              <div className="flex flex-col py-4 bg-white">
                <div className="accordion accordion-flush" id="mobileMenu">
                  <NavButton to="/" primary="Home" />
                  <NavButton to="#" primary="Urgent Care" />
                  <NavButton to="#" primary="Primary Care" />
                  <NavButton to="#" primary="Mental Health" />
                  <NavButton to="#" primary="Pediatrics" />
                  <NavButton
                    to="https://www.yourhealthfile.com/providers/1534226/book-an-appointment-.html"
                    primary="Get Started"
                  />
                </div>
              </div>
            ) : (
              <ul className="flex flex-row justify-end rounded-lg">
                <li>
                  <NavButton to="#" primary="Urgent Care" />
                </li>
                <li>
                  <NavButton to="#" primary="Primary Care" />
                </li>
                <li>
                  <NavButton to="#" primary="Mental Health" />
                </li>
                <li>
                  <NavButton to="#" primary="Pediatrics" />
                </li>
                <li>
                  <a
                    className="text-white bg-blue-600 hover:bg-blue-700 rounded-full font-bold border-2 py-3 px-8 transition-all hidden lg:block"
                    href="http://yourhealthfile.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Get Started
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
      {routes()}
    </Fragment>
  );
};

export default Navbar;
