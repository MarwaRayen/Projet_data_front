import React, { useState } from "react";

const Etf = ({ listActifs, setListActifs }) => {
  const [currentInput, setCurrentInput] = useState("");
  const [currentPercentage, setCurrentPercentage] = useState("");

  const handleSaveInput = (e) => {
    if (currentInput.trim() && currentPercentage.trim()) {
      const newEtf = {
        etf: currentInput.toUpperCase(),
        percentage: parseFloat(currentPercentage),
      };
      setListActifs([...listActifs, newEtf]);
      setCurrentInput("");
      setCurrentPercentage("");
    }
  };

  const handleDeleteInput = (indexToDelete) => {
    setListActifs(listActifs.filter((_, index) => index !== indexToDelete));
  };

  // Calculate total percentage
  const totalPercentage = listActifs.reduce((sum, actif) => sum + actif.percentage, 0);
  const isValidTotal = totalPercentage === 100;

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-4 border border-purple-700/40">
        <h3 className="text-xl font-bold text-purple-300 flex items-center gap-2 mb-1">
          <span>📊</span> Composition du Portefeuille
        </h3>
        <p className="text-purple-200 text-sm">
          Ajoutez vos ETF et définissez leur allocation
        </p>
      </div>

      {/* Input Section */}
      <div className="bg-[#0f0f1e]/50 rounded-xl p-6 border border-purple-800/30 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-purple-200 font-semibold mb-2 text-sm">
              Ticker ETF
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-purple-800/50 text-white placeholder-purple-400/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none uppercase"
              placeholder="Ex: SPY, QQQ, VTI"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-purple-200 font-semibold mb-2 text-sm">
              Allocation (%)
            </label>
            <input
              type="number"
              className="w-full p-3 rounded-lg bg-[#1a1a2e] border border-purple-800/50 text-white placeholder-purple-400/50 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
              placeholder="Ex: 40"
              value={currentPercentage}
              onChange={(e) => setCurrentPercentage(e.target.value)}
              min="0"
              max="100"
            />
          </div>
        </div>

        <button
          type="button"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
          onClick={handleSaveInput}
        >
          <span>+</span> Ajouter au Portefeuille
        </button>
      </div>

      {/* ETF List Display */}
      {listActifs.length > 0 && (
        <div className="space-y-4">
          {/* Progress Bar */}
          <div className="bg-[#0f0f1e]/50 rounded-xl p-4 border border-purple-800/30">
            <div className="flex justify-between items-center mb-2">
              <span className="text-purple-200 font-semibold text-sm">
                Allocation Totale
              </span>
              <span className={`font-bold text-lg ${isValidTotal ? 'text-green-400' : totalPercentage > 100 ? 'text-red-400' : 'text-yellow-400'}`}>
                {totalPercentage.toFixed(1)}%
              </span>
            </div>
            
            <div className="w-full bg-[#1a1a2e] rounded-full h-3 overflow-hidden border border-purple-800/30">
              <div
                className={`h-full transition-all duration-500 ${
                  isValidTotal 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                    : totalPercentage > 100 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                    : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                }`}
                style={{ width: `${Math.min(totalPercentage, 100)}%` }}
              />
            </div>
            
            {!isValidTotal && (
              <p className="text-xs mt-2 text-purple-300">
                {totalPercentage < 100 
                  ? `⚠️ Il reste ${(100 - totalPercentage).toFixed(1)}% à allouer` 
                  : `⚠️ Dépassement de ${(totalPercentage - 100).toFixed(1)}%`}
              </p>
            )}
          </div>

          {/* ETF Cards */}
          <div className="space-y-3">
            <p className="text-purple-300 font-semibold flex items-center gap-2">
              <span>💼</span> Votre Allocation ({listActifs.length} ETF{listActifs.length > 1 ? 's' : ''})
            </p>
            
            <div className="grid grid-cols-1 gap-3">
              {listActifs.map((input, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] rounded-lg p-4 border border-purple-800/40 hover:border-purple-600/60 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      {/* ETF Icon/Badge */}
                      <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">
                        {input.etf.slice(0, 2)}
                      </div>
                      
                      {/* ETF Info */}
                      <div className="flex-1">
                        <h4 className="text-white font-bold text-lg">
                          {input.etf}
                        </h4>
                        <div className="flex items-center gap-2">
                          <div className="bg-purple-900/50 rounded-full px-3 py-1">
                            <span className="text-purple-300 font-semibold text-sm">
                              {input.percentage}%
                            </span>
                          </div>
                          {/* Visual percentage bar */}
                          <div className="flex-1 max-w-[100px] bg-[#0f0f1e] rounded-full h-2 overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                              style={{ width: `${input.percentage}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Delete Button */}
                    <button
                      type="button"
                      className="ml-4 bg-red-900/30 hover:bg-red-900/60 text-red-400 hover:text-red-300 w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 border border-red-800/30 hover:border-red-600/60 group-hover:scale-110"
                      onClick={() => handleDeleteInput(index)}
                      title="Supprimer"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          {isValidTotal && (
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-xl p-4 border border-green-700/40">
              <p className="text-green-300 font-semibold flex items-center gap-2">
                <span>✅</span> Portefeuille complet et équilibré !
              </p>
            </div>
          )}
        </div>
      )}

      {/* Empty State */}
      {listActifs.length === 0 && (
        <div className="bg-[#0f0f1e]/30 rounded-xl p-8 border border-purple-800/20 text-center">
          <div className="text-6xl mb-4">📈</div>
          <p className="text-purple-300 font-semibold mb-2">
            Aucun ETF ajouté
          </p>
          <p className="text-purple-400 text-sm">
            Commencez par ajouter vos premiers ETF ci-dessus
          </p>
        </div>
      )}
    </div>
  );
};

export default Etf;