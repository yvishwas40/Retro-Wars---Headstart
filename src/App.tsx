import React, { useState, useRef } from 'react';
import { games, type Game } from './data/games';
import Header from './components/Header';
import Footer from './components/Footer';
import GameGrid from './components/GameGrid';
import PlayerForm from './components/PlayerForm';
import BattleScreen from './components/BattleScreen';

function App() {
  const [participant1, setParticipant1] = useState('');
  const [participant2, setParticipant2] = useState('');
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [showBattle, setShowBattle] = useState(false);
  const gamesRef = useRef<HTMLDivElement>(null);

  const scrollToGames = () => {
    gamesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectRandomGame = () => {
    if (!participant1 || !participant2) {
      alert('Please enter both participant names!');
      return;
    }
    const randomIndex = Math.floor(Math.random() * games.length);
    setSelectedGame(games[randomIndex]);
    setShowBattle(true);
  };

  const resetGame = () => {
    setParticipant1('');
    setParticipant2('');
    setSelectedGame(null);
    setShowBattle(false);
  };

  if (showBattle && selectedGame) {
    return (
      <BattleScreen
        participant1={participant1}
        participant2={participant2}
        selectedGame={selectedGame}
        resetGame={resetGame}
        scrollToGames={scrollToGames}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[conic-gradient(at_center,_var(--tw-gradient-stops))] from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 via-indigo-500 to-purple-500 flex flex-col">
      <Header scrollToGames={scrollToGames} />
      <main className="flex-1 flex items-center justify-center p-4 mt-20">
        <div className="bg-black/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_0_100px_rgba(255,255,255,0.4)] w-full max-w-6xl border-2 border-white/40">
          <PlayerForm
            participant1={participant1}
            participant2={participant2}
            setParticipant1={setParticipant1}
            setParticipant2={setParticipant2}
            selectRandomGame={selectRandomGame}
          />
          <GameGrid games={games} gamesRef={gamesRef} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;