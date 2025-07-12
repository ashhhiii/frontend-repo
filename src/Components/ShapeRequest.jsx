import React from 'react';
import { FaExchangeAlt, FaUser, FaStar, FaCheck } from 'react-icons/fa';

const ShapeRequest = () => {
  // Sample data
  const requests = [
    { id: 1, name: "Neha Gupta", skillsOffered: ["AWS", "Cloud Architecture"], skillsWanted: ["Python", "Django"], rating: 4.8 },
    { id: 2, name: "Varun Mehta", skillsOffered: ["Docker", "Kubernetes"], skillsWanted: ["JavaScript", "React"], rating: 4.5 },
    { id: 3, name: "Priya Singh", skillsOffered: ["AutoCAD", "3D Modeling"], skillsWanted: ["Communication", "Teamwork"], rating: 4.2 }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Skill Exchange Requests</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Side Profile Section */}
          <div className="bg-zinc-800 rounded-xl p-6">
            <div className="flex flex-col items-center mb-6">
              <div className="w-24 h-24 rounded-full bg-[#8D77AB] flex items-center justify-center mb-4">
                <FaUser className="text-3xl" />
              </div>
              <h2 className="text-xl font-bold">Your Profile</h2>
              <p className="text-zinc-400 text-sm">Available: Weekdays after 6PM</p>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-2">Skills Offered</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "JavaScript"].map((skill, i) => (
                  <span key={i} className="bg-[#8D77AB] px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Skills Wanted</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Docker", "React"].map((skill, i) => (
                  <span key={i} className="bg-zinc-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Main Requests Section */}
          <div className="md:col-span-2">
            <div className="bg-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                <FaExchangeAlt /> Pending Requests
              </h2>

              <div className="space-y-6">
                {requests.map(request => (
                  <div key={request.id} className="bg-zinc-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#8D77AB] flex items-center justify-center">
                          <FaUser />
                        </div>
                        <div>
                          <h3 className="font-bold">{request.name}</h3>
                          <div className="flex items-center gap-1 text-sm text-zinc-300">
                            <FaStar className="text-yellow-400" />
                            <span>{request.rating}</span>
                          </div>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-[#8D77AB] rounded-lg hover:bg-[#6e4e8e] transition">
                        Respond
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm text-zinc-400 mb-1">Offers</h4>
                        <div className="flex flex-wrap gap-2">
                          {request.skillsOffered.map((skill, i) => (
                            <span key={i} className="bg-[#8D77AB] px-2 py-1 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm text-zinc-400 mb-1">Wants</h4>
                        <div className="flex flex-wrap gap-2">
                          {request.skillsWanted.map((skill, i) => (
                            <span key={i} className="bg-zinc-600 px-2 py-1 rounded-full text-xs">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-8">
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <button 
                      key={num} 
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${num === 1 ? 'bg-[#8D77AB]' : 'bg-zinc-700'}`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShapeRequest;