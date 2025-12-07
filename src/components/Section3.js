import React from "react";
import line from "./../assets/line.png"; 

function Section3() {
  const steps = [
    {
      number: "01",
      title: "Saisissez vos informations",
      icon: "📝",
      description: "Configurez votre période d'investissement et vos montants",
      details: [
        { label: "Date de début & fin", value: "Définissez votre horizon" },
        { label: "Montant initial", value: "Capital de départ" },
        { label: "Contributions récurrentes", value: "Montant régulier" },
        { label: "Fréquence", value: "Mensuelle, trimestrielle, annuelle" },
        { label: "Frais de gestion", value: "Coûts annuels" }
      ]
    },
    {
      number: "02",
      title: "Composez votre portefeuille",
      icon: "💼",
      description: "Sélectionnez vos ETF et définissez leur allocation",
      details: [
        { label: "Choix des ETF", value: "SPY, QQQ, VTI, etc." },
        { label: "Allocation", value: "Répartition en %" },
        { label: "Validation", value: "Total = 100%" }
      ]
    },
    {
      number: "03",
      title: "Analysez les résultats",
      icon: "📊",
      description: "Visualisez la performance et les projections",
      details: [
        { label: "Rendements", value: "Évolution par actif" },
        { label: "Distribution", value: "Histogrammes" },
        { label: "Performance", value: "Cumul temporel" },
        { label: "Prédictions", value: "Régression linéaire" }
      ]
    }
  ];

  const metrics = [
    {
      name: "Ratio de Sharpe",
      icon: "⚡",
      description: "Mesure la rentabilité ajustée au risque de votre investissement. Plus le ratio est élevé, meilleure est la performance par rapport au risque pris.",
      formula: "(Rendement - Taux sans risque) / Volatilité",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "CAGR (Taux de Croissance Annuel Composé)",
      icon: "📈",
      description: "Calcule la croissance moyenne annuelle d'un investissement sur une période donnée, en tenant compte de l'effet cumulatif.",
      formula: "((Valeur finale / Valeur initiale) ^ (1 / Années)) - 1",
      color: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <section
      id="section3"
      className="py-20 bg-gradient-to-b from-[#0f0f1e] via-[#16213e] to-[#0f0f1e] text-white"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
            Comment ça fonctionne ?
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-purple-200 text-lg max-w-3xl mx-auto">
            Wallet vous accompagne dans la simulation et l'analyse de votre portefeuille d'investissement à long terme. 
            Suivez ces étapes simples pour obtenir des insights précieux.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-purple-800/50 hover:border-purple-600/60 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-purple-500/30"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="text-6xl">{step.icon}</div>
                <div className="text-5xl font-bold text-purple-500/20">
                  {step.number}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-purple-400 mb-3">
                {step.title}
              </h3>
              <p className="text-purple-200 text-sm mb-6">
                {step.description}
              </p>

              {/* Details */}
              <div className="space-y-3">
                {step.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="bg-[#0f0f1e]/50 rounded-lg p-3 border border-purple-800/30 hover:border-purple-700/50 transition-all duration-200"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-purple-300 text-xs font-semibold">
                        {detail.label}
                      </span>
                      <span className="text-purple-200 text-xs">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Financial Metrics Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Métriques Financières
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-8 border border-purple-800/50 hover:border-purple-600/60 transition-all duration-300 shadow-xl"
              >
                {/* Icon & Title */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {metric.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-purple-400">
                    {metric.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-purple-100 leading-relaxed mb-6">
                  {metric.description}
                </p>

                {/* Formula */}
                <div className="bg-[#0f0f1e] rounded-xl p-4 border border-purple-700/40">
                  <div className="text-purple-300 text-xs font-semibold mb-2">
                    FORMULE
                  </div>
                  <code className="text-white font-mono text-sm">
                    {metric.formula}
                  </code>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features List */}
        <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl p-10 border border-purple-800/50 shadow-xl">
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
            Analyses Disponibles
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: "📈", text: "Évolution des rendements par actif", description: "Suivi temporel détaillé" },
              { icon: "📊", text: "Distribution des investissements", description: "Histogrammes et répartition" },
              { icon: "💰", text: "Performance cumulée", description: "Croissance du capital" },
              { icon: "📋", text: "Métriques financières clés", description: "Sharpe, CAGR, Volatilité" },
              { icon: "🔮", text: "Prédictions par régression", description: "Projections futures" },
              { icon: "⚖️", text: "Analyse comparative", description: "Benchmarks et comparaisons" }
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-[#0f0f1e]/50 rounded-xl border border-purple-800/30 hover:border-purple-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                <div className="text-3xl">{feature.icon}</div>
                <div>
                  <div className="text-purple-300 font-semibold mb-1">
                    {feature.text}
                  </div>
                  <div className="text-purple-200 text-sm">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-purple-700/50 backdrop-blur-sm">
            <p className="text-purple-100 text-lg mb-4">
              Prêt à analyser votre portefeuille ?
            </p>
            <a
              href="#section2"
              className="inline-block bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 hover:from-purple-700 hover:via-pink-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50"
            >
              Commencer l'Analyse →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;