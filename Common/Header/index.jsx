import { NAV_LINKS } from "./constants";
import Link from "next/link";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import Accordion from "../../pages/about/accordion/accordion";

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
            src={"images/menu.png"}
            width={35}
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
          {searchOpen && (
            <Fade direction="down" duration={700} triggerOnce>
              <input className="search_input" />
            </Fade>
          )}
          <div
            onClick={() => setSearchOpen(!searchOpen)}
            className="search_icon cursor-pointer"
          >
            <img src="images/search.png" height={25} width={25} />
          </div>
        </nav>
        <div
          className="bg-white fixed z-10 top-0 left-0 w-full right-0 bottom-0 h-full"
          style={{ display: hamburgerActive ? "block" : "none" }}
          data-behavior="header-menu"
        >
          <div className="px-3 text-right flex justify-items-end justify-end mt-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              width={25}
            >
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
            </svg>
          </div>
          <div className="px-3 text-center mob-header-acc">
            {Object.keys(NAV_LINKS).map((mainLink, index) => {
              return (
                <Accordion
                  key={index}
                  title={
                    <Link
                      href={NAV_LINKS[mainLink].link}
                      className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
                    >
                      {NAV_LINKS[mainLink].label}
                    </Link>
                  }
                  content={"desc"}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
