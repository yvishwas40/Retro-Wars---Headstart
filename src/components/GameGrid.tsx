import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Game } from '../data/games';

interface GameGridProps {
  games: Game[];
  gamesRef: React.RefObject<HTMLDivElement>;
}

const GameGrid: React.FC<GameGridProps> = ({ games, gamesRef }) => {
  return (
    <div ref={gamesRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {games.map((game) => (
        <a
          key={game.id}
          href={game.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 via-yellow-600 to-purple-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-black hover:bg-black/80 transition-all duration-300">
            <div className="w-full aspect-square mb-4 overflow-hidden rounded-lg">
              <img 
                src={game.image} 
                alt={game.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="text-lg text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 font-bold group-hover:scale-105 transition-transform duration-300">{game.name}</span>
            <ExternalLink className="w-5 h-5 text-white/50 mt-2 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
          </div>
        </a>
      ))}
    </div>
  );
};

export default GameGrid;