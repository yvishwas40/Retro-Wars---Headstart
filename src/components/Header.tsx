import React, { useState } from 'react';
import { Gamepad, School, Search } from 'lucide-react';
import { games } from '../data/games';

interface HeaderProps {
  scrollToGames: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToGames }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const filteredGames = games.filter(game => 
    game.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setShowResults(e.target.value.length > 0);
  };
  
  const handleSearchBlur = () => {
    // Delay hiding results to allow for clicking on them
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 rounded-full animate-spin-slow"></div>
            <div className="absolute inset-0.5 bg-black rounded-full flex items-center justify-center">
              <School className="w-8 h-8 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
              Headstart CSE 2025
            </h2>
            <p className="text-sm text-white/60">Department of Computer Science</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="flex items-center bg-black/50 border border-white/20 rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={handleSearchChange}
                onBlur={handleSearchBlur}
                onFocus={() => setShowResults(searchQuery.length > 0)}
                className="bg-transparent text-white px-4 py-2 w-48 focus:w-64 transition-all duration-300 focus:outline-none"
              />
              <div className="pr-4">
                <Search className="w-5 h-5 text-white/60" />
              </div>
            </div>
            
            {showResults && filteredGames.length > 0 && (
              <div className="absolute top-full mt-2 right-0 w-64 bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden shadow-lg z-50">
                <div className="max-h-64 overflow-y-auto">
                  {filteredGames.map(game => (
                    <a
                      key={game.id}
                      href={game.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 hover:bg-white/10 transition-colors"
                    >
                      <img 
                        src={game.image} 
                        alt={game.name} 
                        className="w-10 h-10 object-cover rounded-md"
                      />
                      <span className="text-white">{game.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <button
            onClick={scrollToGames}
            className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            <Gamepad className="w-4 h-4" />
            Games
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;