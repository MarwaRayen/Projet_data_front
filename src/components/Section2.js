import React, { useState } from "react";
import line from "./../assets/line.png"; 
import axios from 'axios';
import Etf from "./Etf";
import Plot from 'react-plotly.js';
import '../App.css';

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

function Section2() {
  const [plotData, setPlotData] = useState(null);
  const [statsData, setStatsData] = useState(null);

  const [dateDebut, setDateDebut] = useState('2012-12-12');
  const [dateFin, setDateFin] = useState('2024-12-12');
  const [frequenceContributions, setFrequenceContributions] = useState('monthly');

  const [investInit, setInvestInit] = useState(20000);
  const [investRecu, setInvestRecu] = useState(1000);
  const [fraisGestion, setFraisGestion] = useState(50);

  const [listActifs, setListActifs] = useState([]);

  const fetch_data = () => {
    const query_params = {
      "dateDebut": dateDebut,
      "dateFin": dateFin,
      "investInit": investInit,
      "investRecu": investRecu,
      "listActifs": listActifs,
      "fraisGestion": fraisGestion,
      "frequenceContributions": frequenceContributions,
    };

    axios.post(`${process.env.REACT_APP_BACKEND_URL}/get_all_data`, query_params)
      .then((result) => {
        if (result.data.success === 'true') {
          if (result.data.json_figures) {
            const json_figures = Object.fromEntries(
              Object.entries(result.data.json_figures).map(([key, value]) => [key, JSON.parse(value)])
            );
            setPlotData(json_figures);
          }

          if (result.data.df_stats) {
            setStatsData(result.data.df_stats);
          }
        } else {
          console.log("Error while fetching the data");
        }
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };

  const get_figures = () => {
    if (plotData != null) {
      return (
        <div className="w-full flex flex-col gap-6">
          {Object.entries(plotData).map(([plot_name, plot]) => (
            <div key={plot_name} className="bg-[#1a1a2e] rounded-2xl p-6 shadow-2xl border border-purple-900/30">
              <Plot
                data={plot.data}
                layout={plot.layout}
                className="w-full"
              />
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const get_stats = () => {
    if (statsData != null && Array.isArray(statsData) && statsData.length > 0) {
      const statLabels = [
        "Volatilité Mensuelle",
        "Volatilité Annuelle", 
        "CAGR",
        "Ratio Sharpe"
      ];

      const icons = ["📊", "📈", "💹", "⚡"];

      return (
        <div className="mt-12 w-full">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Métriques de Performance
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {statsData.map((stat, index) => {
              const etfName = Object.keys(stat)[0];
              const value = stat[etfName];
              
              let displayValue;
              if (index === 3) {
                displayValue = value.toFixed(3);
              } else {
                displayValue = (value * 100).toFixed(2) + '%';
              }

              return (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl p-6 shadow-xl border border-purple-800/40 hover:border-purple-600/60 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{icons[index]}</span>
                    <h4 className="text-purple-300 font-semibold text-lg">{statLabels[index]}</h4>
                  </div>
                  <p className="text-white text-3xl font-bold">{displayValue}</p>
                </div>
              );
            })}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="section2" className="py-20 bg-gradient-to-b from-[#0f0f1e] via-[#16213e] to-[#0f0f1e] text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Configuration du Portefeuille
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Colonne gauche - Formulaire */}
            <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 shadow-2xl border border-purple-900/30">
              <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center gap-2">
                <span>💰</span> Paramètres d'Investissement
              </h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-purple-200 font-semibold mb-2">
                    Montant Initial (€)
                  </label>
                  <input
                    type="number"
                    value={investInit}
                    onChange={(e) => setInvestInit(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#0f0f1e] border border-purple-800/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
                  />
                </div>

                <div>
                  <label className="block text-purple-200 font-semibold mb-2">
                    Contributions Récurrentes (€)
                  </label>
                  <input
                    type="number"
                    value={investRecu}
                    onChange={(e) => setInvestRecu(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#0f0f1e] border border-purple-800/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
                    placeholder="Ex: 100"
                  />
                </div>

                <div>
                  <label className="block text-purple-200 font-semibold mb-2">
                    Fréquence
                  </label>
                  <select
                    value={frequenceContributions}
                    onChange={(e) => setFrequenceContributions(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#0f0f1e] border border-purple-800/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
                  >
                    <option value="monthly">Mensuel</option>
                    <option value="quarterly">Trimestriel</option>
                    <option value="yearly">Annuel</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-purple-200 font-semibold mb-2">
                      Date Début
                    </label>
                    <input
                      type="date"
                      value={dateDebut}
                      onChange={(e) => setDateDebut(e.target.value)}
                      className="w-full p-3 rounded-lg bg-[#0f0f1e] border border-purple-800/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-purple-200 font-semibold mb-2">
                      Date Fin
                    </label>
                    <input
                      type="date"
                      value={dateFin}
                      onChange={(e) => setDateFin(e.target.value)}
                      className="w-full p-3 rounded-lg bg-[#0f0f1e] border border-purple-800/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-purple-200 font-semibold mb-2">
                    Frais de Gestion Annuels (€)
                  </label>
                  <input
                    type="number"
                    value={fraisGestion}
                    onChange={(e) => setFraisGestion(e.target.value)}
                    className="w-full p-3 rounded-lg bg-[#0f0f1e] border border-purple-800/50 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all outline-none"
                  />
                </div>

                <Etf listActifs={listActifs} setListActifs={setListActifs} />

                <button
                  type="button"
                  onClick={fetch_data}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
                >
                  🚀 Lancer l'Analyse
                </button>
              </form>
            </div>

            {/* Colonne droite - Info box */}
            <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-8 border border-purple-800/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <span>ℹ️</span> À propos de l'analyse
              </h3>
              <div className="space-y-4 text-purple-100">
                <p className="leading-relaxed">
                  Cet outil vous permet de simuler et d'analyser la performance de votre portefeuille d'investissement sur une période donnée.
                </p>
                <div className="bg-[#1a1a2e]/50 rounded-lg p-4 border border-purple-800/30">
                  <h4 className="font-semibold text-purple-300 mb-2">📈 Métriques calculées :</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Volatilité mensuelle et annuelle</li>
                    <li>• CAGR (Taux de croissance annuel composé)</li>
                    <li>• Ratio de Sharpe</li>
                    <li>• Évolution du capital</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section résultats */}
          <div className="w-full">
            {get_figures()}
            {get_stats()}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;