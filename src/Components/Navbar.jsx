import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between">
      <div>
        <Link to="/" className="text-2xl font-bold font-['Neue Montreal']">SkillSwap</Link>
      </div>
      <div className="links flex gap-11">
        {["Services", "Our Work", "About us", "Insights", "Contact us", "Requests", "User Profile"].map((item, index) => (
          <Link
            key={index}
            to={
              item === "User Profile" ? "/profile" : 
              item === "Requests" ? "/requests" : 
              "#"
            }
            className={`text-lg capitalize font-light ${index === 6 ? "ml-32" : ""}`}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;