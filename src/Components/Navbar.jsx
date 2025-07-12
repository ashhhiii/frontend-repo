import React from 'react'

function Navbar() {
  return (
    <div className =" fixed z-[999] w-full px-20 py=8' font-['Neue Montreal'] flex justify-between">
        <div>
          <h1 className="text-2xl font-bold font-['Neue Montreal']">SkillSwap</h1>
        </div>
        <div className="links flex gap-11">
            {["Services" , "Our Work", " About us" , "Insights","Contact us"].map((item,index) =>(
                <a key = {index} className = {`text-lg capitalize font-light  ${index === 4 &&"ml-32" }`}>{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar