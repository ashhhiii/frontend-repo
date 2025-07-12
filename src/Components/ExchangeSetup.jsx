import React, { useState } from 'react';
import { FaExchangeAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

const ExchangeSetup = () => {
  const [step, setStep] = useState(1);
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [selectedWantedSkill, setSelectedWantedSkill] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);

  // Sample data
  const yourSkills = ["Python", "Django", "JavaScript", "React"];
  const theirSkills = ["AWS", "Docker", "Kubernetes", "Machine Learning"];
  const packages = [
    { id: 1, name: "Basic", sessions: 2, duration: "1 hour each" },
    { id: 2, name: "Standard", sessions: 4, duration: "1.5 hours each" },
    { id: 3, name: "Premium", sessions: 6, duration: "2 hours each" }
  ];

  return (
    <div className="min-h-screen bg-zinc-900 text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Setup Skill Exchange</h1>
        
        {/* Progress Steps */}
        <div className="flex justify-between mb-8 relative">
          <div className={`flex flex-col items-center ${step >= 1 ? 'text-[#8D77AB]' : 'text-zinc-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 1 ? 'bg-[#8D77AB]' : 'bg-zinc-700'}`}>
              {step > 1 ? <FaCheck /> : 1}
            </div>
            <span className="text-sm">Your Skill</span>
          </div>
          
          <div className="absolute top-5 left-1/4 w-1/4 h-1 bg-zinc-700">
            <div className={`h-full ${step >= 2 ? 'bg-[#8D77AB]' : ''}`} style={{ width: step >= 2 ? '100%' : '0%' }}></div>
          </div>
          
          <div className={`flex flex-col items-center ${step >= 2 ? 'text-[#8D77AB]' : 'text-zinc-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 2 ? 'bg-[#8D77AB]' : 'bg-zinc-700'}`}>
              {step > 2 ? <FaCheck /> : 2}
            </div>
            <span className="text-sm">Their Skill</span>
          </div>
          
          <div className="absolute top-5 right-1/4 w-1/4 h-1 bg-zinc-700">
            <div className={`h-full ${step >= 3 ? 'bg-[#8D77AB]' : ''}`} style={{ width: step >= 3 ? '100%' : '0%' }}></div>
          </div>
          
          <div className={`flex flex-col items-center ${step >= 3 ? 'text-[#8D77AB]' : 'text-zinc-500'}`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${step >= 3 ? 'bg-[#8D77AB]' : 'bg-zinc-700'}`}>
              3
            </div>
            <span className="text-sm">Package</span>
          </div>
        </div>

        {/* Step 1: Choose your skill */}
        {step === 1 && (
          <div className="bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Choose one of your offered skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {yourSkills.map((skill, i) => (
                <button
                  key={i}
                  className={`p-4 rounded-lg text-left ${selectedSkill === skill ? 'bg-[#8D77AB]' : 'bg-zinc-700 hover:bg-zinc-600'}`}
                  onClick={() => setSelectedSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                className="px-6 py-3 bg-[#8D77AB] rounded-lg flex items-center gap-2 hover:bg-[#6e4e8e] transition disabled:opacity-50"
                disabled={!selectedSkill}
                onClick={() => setStep(2)}
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Choose their skill */}
        {step === 2 && (
          <div className="bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Choose one of their wanted skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {theirSkills.map((skill, i) => (
                <button
                  key={i}
                  className={`p-4 rounded-lg text-left ${selectedWantedSkill === skill ? 'bg-[#8D77AB]' : 'bg-zinc-700 hover:bg-zinc-600'}`}
                  onClick={() => setSelectedWantedSkill(skill)}
                >
                  {skill}
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-6 py-3 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition"
                onClick={() => setStep(1)}
              >
                Back
              </button>
              <button
                className="px-6 py-3 bg-[#8D77AB] rounded-lg flex items-center gap-2 hover:bg-[#6e4e8e] transition disabled:opacity-50"
                disabled={!selectedWantedSkill}
                onClick={() => setStep(3)}
              >
                Next <FaArrowRight />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Choose package */}
        {step === 3 && (
          <div className="bg-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-6">Select Exchange Package</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {packages.map(pkg => (
                <div
                  key={pkg.id}
                  className={`p-6 rounded-lg border-2 ${selectedPackage === pkg.id ? 'border-[#8D77AB]' : 'border-zinc-600 hover:border-zinc-500'}`}
                  onClick={() => setSelectedPackage(pkg.id)}
                >
                  <h3 className="text-lg font-bold mb-2">{pkg.name}</h3>
                  <p className="text-zinc-300 mb-1">{pkg.sessions} sessions</p>
                  <p className="text-zinc-300">{pkg.duration}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button
                className="px-6 py-3 bg-zinc-700 rounded-lg hover:bg-zinc-600 transition"
                onClick={() => setStep(2)}
              >
                Back
              </button>
              <button
                className="px-6 py-3 bg-[#8D77AB] rounded-lg flex items-center gap-2 hover:bg-[#6e4e8e] transition disabled:opacity-50"
                disabled={!selectedPackage}
                onClick={() => console.log("Exchange setup complete!")}
              >
                Complete Exchange Setup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExchangeSetup;