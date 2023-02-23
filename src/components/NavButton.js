import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import useScrollPosition from "../hooks/useScrollPosition";
import useWindowSize from "../hooks/useWindowSize";
//import styles from './NavButton.module.css';

function NavButton(props) {
  const { dropdownLinks, primary, to, id } = props;

  const scrollPosition = useScrollPosition();
  const size = useWindowSize();

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  const location = useLocation();
  const path = location.pathname;

  const activeDropdownLink = dropdownLinks?.some((link) => link.to === path);

  return dropdownLinks ? (
    size.width < 1024 ? (
      <div className="accordion-item">
        <h2 className="accordion-header mb-0" id={"mobileHeader" + id}>
          <button
            className="accordion-button collapsed font-medium text-lg !text-blue-primary px-4 py-2 focus:outline-none !shadow-none flex items-center after:hidden"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={"#mobileSubMenu" + id}
            aria-expanded="false"
            aria-controls={"mobileSubMenu" + id}
          >
            {primary}
            <span className="ml-3 text-3xl lg:h-[28px]">
              <MdKeyboardArrowDown />
            </span>
          </button>
        </h2>
        <div
          className="accordion-collapse collapse"
          id={"mobileSubMenu" + id}
          aria-labelledby={"mobileHeader" + id}
          data-bs-parent="#mobileMenu"
        >
          <div
            className={classNames(
              dropdownLinks.length > 6 ? "grid grid-cols-2" : "flex flex-col",
              "accordion-body px-5"
            )}
          >
            {dropdownLinks.map((link) => {
              return (
                <a
                  className={classNames(
                    path === link.to
                      ? "text-red-secondary"
                      : "text-blue-primary",
                    "p-2 transition-all font-medium"
                  )}
                  aria-current="page"
                  href={link.to}
                >
                  {link.primary}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    ) : (
      <div className="relative">
        <a
          className={classNames(
            path === to || activeDropdownLink
              ? classNames(
                  scrollPosition > 0
                    ? "text-red-secondary border-red-secondary"
                    : "text-yellow-logo border-yellow-logo"
                )
              : classNames(
                  scrollPosition > 0
                    ? "text-blue-primary hover:border-red-secondary"
                    : "text-white hover:border-blue-secondary",
                  "border-transparent"
                ),
            "peer group bg-transparent py-2 transition-all flex items-center font-medium text-lg border-b-2"
          )}
          href={to}
        >
          {primary}
          <span className="ml-2 text-3xl lg:h-[28px]">
            <MdKeyboardArrowDown className="group-hover:rotate-180 transition-all" />
          </span>
        </a>
        <div
          className={
            "block peer-hover:max-h-[380px] hover:max-h-[380px] mt-px max-h-0 w-max min-w-full bg-white drop-shadow-lg absolute rounded-b-lg z-50 transition-all duration-300 ease-linear overflow-hidden"
          }
        >
          <div
            className={classNames(
              dropdownLinks.length > 6
                ? "grid grid-cols-2"
                : "flex flex-col p-2"
            )}
          >
            {dropdownLinks.map((link) => {
              return (
                <a
                  className={classNames(
                    path === link.to
                      ? "text-red-secondary"
                      : "text-blue-primary hover:text-red-secondary",
                    dropdownLinks.length > 6 ? "text-center" : "",
                    "p-2 transition-all duration-300 font-medium"
                  )}
                  aria-current="page"
                  href={link.to}
                >
                  {link.primary}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    )
  ) : (
    <a
      className={classNames(
        path === to ? "text-blue-600" : "text-black",
        "hover:text-blue-600 border-transparent hover:border-blue-600 py-2 mx-4 transition-all duration-300 flex items-center font-bold border-b-2"
      )}
      aria-current="page"
      href={to}
    >
      {primary}
    </a>
  );
}

export default NavButton;
