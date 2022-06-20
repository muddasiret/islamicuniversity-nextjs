import { NAV_LINKS } from "./constants";
import Link from "next/link";

const Header = () => {
  const logo = "/images/chair logon updated.png";

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
      <div className="flex justify-between mx-auto flex-row items-center	py-5 px-10 bg-brown">
        <Link href="/">
          <img
            src={logo}
            className="w-auto h-12 cursor-pointer"
            alt="logo_university"
          />
        </Link>
        <nav className="hidden sm:flex sm:justify-center space-x-4">
          {Object.keys(NAV_LINKS).map((key, index) => (
            // <a
            //   href={NAV_LINKS[key].link}
            //   className="uppercase rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 group relative"
            // >
            //   {NAV_LINKS[key].label}
            // </a>
            <div className="uppercase relative group text-md text-white hover:text-yellow-300" key={index}>
              <Link
                href={NAV_LINKS[key].link}
                className="uppercase rounded-lg px-3 py-2 font-medium text-white hover:bg-slate-100 hover:text-slate-900 group relative"
              >
                {NAV_LINKS[key].label}
              </Link>
              {NAV_LINKS[key].sub && (
                <div className="absolute z-1 hidden bg-grey-200 group-hover:block">
                  <div className="bg-white shadow-lg">
                    <div className="uppercase flex-col flex">
                      {Object.keys(NAV_LINKS[key].sub).map(
                        (sub_key, key_index) => (
                          <Link
                            href={NAV_LINKS[key].sub[key_index].link}
                            className="uppercase px-3 py-2 font-medium hover:bg-slate-100 hover:text-slate-900 group relative w-100 text-xs text-left"
                            key={key_index}
                          >
                            <span>{NAV_LINKS[key].sub[key_index].label}</span>
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
