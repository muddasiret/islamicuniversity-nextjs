import React from "react";

const Renewal = () => {
  const logo = "/images/chair logon updated.png";
  return (
    <div className="renewal">
      <img
        src={logo}
        className="h-20 cursor-pointer"
        alt="logo_university"
      />
      <p className="uppercase ml-1 rounded-md bg-white text-black p-5 mt-5">Under Renewal</p>
    </div>
  );
};

export default Renewal;
