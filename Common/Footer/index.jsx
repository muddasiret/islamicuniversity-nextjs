import { FiMail } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { MdNavigateNext } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-3 py-5 px-10 bg-blue-900 text-left">
        <div className="md:border-r pr-5 py-3">
          <p className="text-white text-lg">NAVIGATE TO</p>
          <div className="">
            <a
              href="/about"
              className="flex items-center py-2 border-b-2"
            >
              <MdNavigateNext color="white" />
              <p className="text-white text-sm">ABOUT</p>
            </a>
            <a
              href="/programmes"
              className="flex items-center py-2 border-b-2"
            >
              <MdNavigateNext color="white" />
              <p className="text-white text-sm">PROGRAMMES</p>
            </a>
            <a
              href="www.facebook.com"
              className="flex items-center py-2 border-b-2"
            >
              <MdNavigateNext color="white" />
              <p className="text-white text-sm">RESEARCH</p>
            </a>
            <a
              href="www.facebook.com"
              className="flex items-center py-2 border-b-2"
            >
              <MdNavigateNext color="white" />
              <p className="text-white text-sm">ONLINE LEARNING</p>
            </a>
          </div>
        </div>
        <div>
          <p className="text-white text-base">
            Islamic University | Registered UK Charity No. 1137219
          </p>
          <br />
          <p className="text-white text-base">14 St Paul’s Road</p>
          <p className="text-white text-base">Phone: <a className="text-yellow-500" href="tel:+4733378901">4733378901</a></p>
          <p className="text-white text-base">Email: <a className="text-yellow-500" href="mailto:someone@example.com">someone@example.com</a></p>
        </div>
      </div>
      <div className="md:flex justify-between py-7 px-10 h-10 items-center bg-gray-800">
        <p className="text-white text-xs">
          Islamic University | Registered UK Charity No. 1137219
        </p>
        <div className="flex md:justify-end justify-center items-center my-3">
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
        </div>
      </div>
    </>
  );
};

export default Footer;
