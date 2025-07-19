import React from "react";

const Navbar = () => {
  return (
    <nav className="h-14 bg-purple-700 flex justify-between px-3 items-center text-white">
      <div className="logo font-bold text-lg">
        <a href="/">BitLinks</a>
      </div>
      <ul className="flex justify-center gap-4 items-center">
       <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/shorten">Shorten</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li className="flex gap-3">
          <a href="/shorten" ><button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">Try Now</button> </a>
          <a href="/github" ><button className="bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold">Github</button> </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
