import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Game } from '../data/games';
import Header from './Header';
import Footer from './Footer';

interface BattleScreenProps {
  participant1: string;
  participant2: string;
  selectedGame: Game;
  resetGame: () => void;
  scrollToGames: () => void;
}

const BattleScreen: React.FC<BattleScreenProps> = ({ 
  participant1, 
  participant2, 
  selectedGame, 
  resetGame,
  scrollToGames
}) => {
  return (
    <div className="min-h-screen bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 flex flex-col">
      <Header scrollToGames={scrollToGames} />
      <div className="flex-1 flex items-center justify-center p-4 mt-20">
        <div className="bg-black/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_100px_rgba(255,255,255,0.4)] w-full max-w-4xl border-2 border-white/40">
          <div className="text-center">
            <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400 mb-8 animate-pulse">
              RETRO WARS
            </h1>
            <div className="relative group mb-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-orange-600 via-yellow-600 via-green-600 via-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative p-6 bg-black rounded-xl">
                <img 
                  src={selectedGame.image} 
                  alt={selectedGame.name}
                  className="w-64 h-64 object-cover rounded-xl mx-auto shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-4">{selectedGame.name}</h2>
            <a 
              href={selectedGame.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors mb-8 text-xl hover:scale-105 transform"
            >
              Play Game <ExternalLink className="w-6 h-6" />
            </a>
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="bg-gradient-to-br from-red-500 via-orange-500 to-yellow-500 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-black text-white text-2xl">{participant1}</span>
              </div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 animate-pulse">VS</div>
              <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform">
                <span className="font-black text-white text-2xl">{participant2}</span>
              </div>
            </div>
            <button
              onClick={resetGame}
              className="px-10 py-3 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 text-white rounded-full hover:from-red-600 hover:via-orange-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              New Battle
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BattleScreen;