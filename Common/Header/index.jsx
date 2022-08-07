import { NAV_LINKS } from "./constants";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const logo = "/images/chair logon updated.png";
  const [hamburgerActive, setHamburgerActive] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <div className="flex header-main justify-between mx-auto flex-row items-center	py-5 px-5 md:px-10 bg-brown">
        <Link href="/">
          <img
            src={logo}
            className="w-auto h-12 cursor-pointer"
            alt="logo_university"
          />
        </Link>
        <div className="md:hidden">
          <img
            src={"https://remoteforce.vercel.app/images/hamburger.png"}
            role="button"
            onClick={() => {
              setHamburgerActive(true);
            }}
          />
        </div>
        <nav className="hidden sm:flex sm:justify-center space-x-4 items-center">
          {Object.keys(NAV_LINKS).map((key, index) => (
            <div
              className="uppercase relative group text-md text-white hover:text-yellow-500"
              key={index}
            >
              <Link
                href={NAV_LINKS[key].link}
                className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
              >
                {NAV_LINKS[key].label}
              </Link>
              {NAV_LINKS[key].sub && (
                <div className="absolute z-1 min-w-max bg-grey-200 hidden group-hover:block right-0 top-6">
                  <div className="bg-cream shadow-lg">
                    <div className="uppercase cursor-pointer flex-col flex">
                      {Object.keys(NAV_LINKS[key].sub).map(
                        (sub_key, key_index) => (
                          <Link
                            key={key_index}
                            href={NAV_LINKS[key].sub[key_index].link}
                          >
                            <div className="uppercase text-white cursor-pointer px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 group relative w-100 text-xs text-left">
                              <span>{NAV_LINKS[key].sub[key_index].label}</span>
                            </div>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          {searchOpen && <input className="search_input" />}
          <div
            onClick={() => setSearchOpen(!searchOpen)}
            className="search_icon"
          >
            <svg
              fill="#FFFFFF"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="50px"
              height="50px"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z" />
            </svg>
          </div>
        </nav>
        <div
          className="bg-white fixed z-10 top-0 left-0 w-full right-0 bottom-0 h-full"
          style={{ display: hamburgerActive ? "block" : "none" }}
          data-behavior="header-menu"
        >
          <div className="px-3 text-right flex justify-items-end justify-end">
            <img
              onClick={() => setHamburgerActive(false)}
              className="object-contain h-10"
              src="https://www.pikpng.com/pngl/m/302-3024323_close-icon-close-icon-free-png-clipart.png"
            />
          </div>
          <div className="px-3 text-center">
            {Object.keys(NAV_LINKS).map((key, index) => (
              <div
                className="uppercase relative group text-md hover:text-yellow-300 my-5"
                key={index}
              >
                <Link
                  href={NAV_LINKS[key].link}
                  className="uppercase rounded-lg px-3 py-2 font-medium hover:text-slate-900 group relative"
                >
                  {NAV_LINKS[key].label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
