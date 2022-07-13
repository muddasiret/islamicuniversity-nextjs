import { NAV_LINKS } from "./constants";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const logo = "/images/chair logon updated.png";
  const [hamburgerActive, setHamburgerActive] = useState(false);

  return (
    <>
      {/* <div className="flex justify-end items-center	py-5 px-10 bg-primaryblue h-10">
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiMail color="white" />
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiFacebook color="white" />
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiInstagram color="white" />
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiTwitter color="white" />
        </a>
        <a className="px-3" href="www.facebook.com" target="_blank">
          <FiYoutube color="white" />
        </a>
      </div> */}
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
        <nav className="hidden sm:flex sm:justify-center space-x-4">
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
              {/* {index === 0 && (
                <div className="submenu">
                  <ul>
                    <li>dasdsdadas</li>
                    <li>dasdsdadas</li>
                    <li>dasdsdadas</li>
                    <li>dasdsdadas</li>
                    <li>dasdsdadas</li>
                  </ul>
                </div>
              )} */}
              {NAV_LINKS[key].sub && (
                <div className="absolute z-1 min-w-max bg-grey-200 hidden group-hover:block right-0 top-6">
                  <div className="bg-cream shadow-lg">
                    <div className="uppercase cursor-pointer flex-col flex">
                      {Object.keys(NAV_LINKS[key].sub).map(
                        (sub_key, key_index) => (
                          <div
                            className="uppercase text-white cursor-pointer px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 group relative w-100 text-xs text-left"
                            key={key_index}
                          >
                            <Link href={NAV_LINKS[key].sub[key_index].link}>
                              <span>{NAV_LINKS[key].sub[key_index].label}</span>
                            </Link>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
