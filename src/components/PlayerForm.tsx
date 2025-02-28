import React from 'react';
import { Sparkles } from 'lucide-react';

interface PlayerFormProps {
  participant1: string;
  participant2: string;
  setParticipant1: (value: string) => void;
  setParticipant2: (value: string) => void;
  selectRandomGame: () => void;
}

const PlayerForm: React.FC<PlayerFormProps> = ({
  participant1,
  participant2,
  setParticipant1,
  setParticipant2,
  selectRandomGame
}) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-6 mb-8">
        <Sparkles className="w-12 h-12 text-yellow-400 animate-spin" />
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 via-yellow-400 via-green-400 via-blue-400 via-indigo-400 to-purple-400">
          RETRO WARS
        </h1>
        <Sparkles className="w-12 h-12 text-purple-400 animate-spin" />
      </div>
      <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-12 font-bold">
        Enter participants to begin an epic retro gaming battle!
      </p>
      
      <div className="grid grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
        <input
          type="text"
          value={participant1}
          onChange={(e) => setParticipant1(e.target.value)}
          placeholder="Player 1"
          className="px-6 py-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 border-2 border-red-500/30 rounded-xl text-black placeholder-red-300/70 focus:outline-none focus:border-red-400 text-xl font-medium shadow-lg"
        />
        <input
          type="text"
          value={participant2}
          onChange={(e) => setParticipant2(e.target.value)}
          placeholder="Player 2"
          className="px-6 py-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 rounded-xl text-black placeholder-blue-300/70 focus:outline-none focus:border-blue-400 text-xl font-medium shadow-lg"
        />
      </div>

      <button
        onClick={selectRandomGame}
        disabled={!participant1 || !participant2}
        className="px-12 py-4 bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 text-white rounded-full hover:from-red-600 hover:via-orange-600 hover:via-yellow-600 hover:via-green-600 hover:via-blue-600 hover:via-indigo-600 hover:to-purple-600 transition-all duration-300 font-bold text-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none mb-16"
      >
        Start Battle!
      </button>
    </div>
  );
};

export default PlayerForm;