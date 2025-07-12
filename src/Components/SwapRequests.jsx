import React, { useState } from 'react';
import { FaExchangeAlt, FaUser, FaSearch, FaFilter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SwapRequests = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('received');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data for received requests
  const receivedRequests = [
    {
      id: 1,
      user: {
        name: "Neha Gupta",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        rating: 4.8,
        skills: ["AWS", "Cloud Architecture"]
      },
      offer: "Teach me Python basics",
      request: "Learn AWS fundamentals",
      date: "2 days ago",
      status: "pending"
    },
    {
      id: 2,
      user: {
        name: "Varun Mehta",
        avatar: "https://randomuser.me/api/portraits/men/46.jpg",
        rating: 4.5,
        skills: ["Docker", "Kubernetes"]
      },
      offer: "Help with JavaScript",
      request: "Learn Docker basics",
      date: "1 week ago",
      status: "pending"
    }
  ];

  // Sample data for sent requests
  const sentRequests = [
    {
      id: 3,
      user: {
        name: "Priya Singh",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg",
        rating: 4.2,
        skills: ["AutoCAD", "3D Modeling"]
      },
      offer: "Teach Django framework",
      request: "Learn AutoCAD basics",
      date: "3 days ago",
      status: "pending"
    }
  ];

  const filteredRequests = activeTab === 'received' 
    ? receivedRequests.filter(req => 
        req.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.offer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.request.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : sentRequests.filter(req => 
        req.user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.offer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        req.request.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-zinc-900 text-white pt-24 px-6 pb-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <FaExchangeAlt className="text-[#8D77AB]" />
            Swap Requests
          </h1>
          <button 
            onClick={() => navigate('/setup-exchange')}
            className="px-6 py-3 bg-[#8D77AB] rounded-lg hover:bg-[#6e4e8e] transition"
          >
            + New Request
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Search requests..."
              className="w-full pl-12 pr-4 py-3 bg-zinc-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8D77AB]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="px-4 py-3 bg-zinc-800 rounded-lg flex items-center gap-2 hover:bg-zinc-700 transition">
            <FaFilter />
            Filters
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-zinc-700 mb-6">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'received' ? 'text-[#8D77AB] border-b-2 border-[#8D77AB]' : 'text-zinc-400'}`}
            onClick={() => setActiveTab('received')}
          >
            Received ({receivedRequests.length})
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'sent' ? 'text-[#8D77AB] border-b-2 border-[#8D77AB]' : 'text-zinc-400'}`}
            onClick={() => setActiveTab('sent')}
          >
            Sent ({sentRequests.length})
          </button>
        </div>

        {/* Requests List */}
        <div className="space-y-6">
          {filteredRequests.length > 0 ? (
            filteredRequests.map(request => (
              <div key={request.id} className="bg-zinc-800 rounded-xl p-6 hover:bg-zinc-750 transition">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* User Info */}
                  <div className="flex items-start gap-4 min-w-[250px]">
                    <img 
                      src={request.user.avatar} 
                      alt={request.user.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-[#8D77AB]"
                    />
                    <div>
                      <h3 className="font-bold">{request.user.name}</h3>
                      <div className="flex items-center gap-1 text-sm text-zinc-300 mb-2">
                        <FaStar className="text-yellow-400" />
                        <span>{request.user.rating}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {request.user.skills.map((skill, i) => (
                          <span key={i} className="bg-zinc-700 px-2 py-1 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Request Details */}
                  <div className="flex-1">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm text-zinc-400 mb-1">They Offer</h4>
                        <p className="font-medium">{request.offer}</p>
                      </div>
                      <div>
                        <h4 className="text-sm text-zinc-400 mb-1">They Want</h4>
                        <p className="font-medium">{request.request}</p>
                      </div>
                    </div>
                    <div className="text-sm text-zinc-400">{request.date}</div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-2 min-w-[150px]">
                    {activeTab === 'received' && (
                      <>
                        <button className="px-4 py-2 bg-[#8D77AB] rounded-lg hover:bg-[#6e4e8e] transition">
                          Accept
                        </button>
                        <button className="px-4 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition">
                          Decline
                        </button>
                      </>
                    )}
                    {activeTab === 'sent' && (
                      <button className="px-4 py-2 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition">
                        Cancel Request
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-zinc-800 rounded-xl p-8 text-center">
              <p className="text-zinc-400">No {activeTab} requests found</p>
              {searchQuery && (
                <button 
                  className="mt-4 text-[#8D77AB] hover:underline"
                  onClick={() => setSearchQuery('')}
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwapRequests;