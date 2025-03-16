import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Coin from '../components/Coin';
import Upgrade from '../components/Upgrade';

// Importar imágenes de las monedas
import cobreImage from '../assets/MonedaCobre.png';
import plataImage from '../assets/MonedaPlateada.png';
import oroImage from '../assets/MonedaOro.png';

interface GameState {
  money: number;
  upgrades: {
    [key: string]: number;
  };
}

const INITIAL_STATE: GameState = {
  money: 0,
  upgrades: {},
};

const UPGRADES = [
  { id: 'autoClicker', name: 'Auto Clicker', baseCost: 10, multiplier: 1.5 },
  { id: 'doubleClick', name: 'Doble Click', baseCost: 50, multiplier: 2 },
  { id: 'megaBoost', name: 'Mega Boost', baseCost: 200, multiplier: 5 },
];

const COINS = [
  { name: 'Moneda de Cobre', value: 1, image: cobreImage },
  { name: 'Moneda de Plata', value: 5, image: plataImage },
  { name: 'Moneda de Oro', value: 10, image: oroImage },
];

const Game: React.FC = () => {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('gameState');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('gameState', JSON.stringify(gameState));
  }, [gameState]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameState(prev => ({
        ...prev,
        money: prev.money + (prev.upgrades.autoClicker || 0),
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [gameState.upgrades.autoClicker]);

  const handleCoinClick = (value: number) => {
    setGameState(prev => ({
      ...prev,
      money: prev.money + value * (1 + (prev.upgrades.doubleClick || 0)),
    }));
  };

  const getUpgradeCost = (upgrade: typeof UPGRADES[0]) => {
    const count = gameState.upgrades[upgrade.id] || 0;
    return Math.floor(upgrade.baseCost * Math.pow(upgrade.multiplier, count));
  };

  const handleUpgrade = (upgradeId: string) => {
    const upgrade = UPGRADES.find(u => u.id === upgradeId);
    if (!upgrade) return;

    const cost = getUpgradeCost(upgrade);
    if (gameState.money >= cost) {
      setGameState(prev => ({
        ...prev,
        money: prev.money - cost,
        upgrades: {
          ...prev.upgrades,
          [upgradeId]: (prev.upgrades[upgradeId] || 0) + 1,
        },
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">J Clicker</h1>
          <button
            onClick={() => navigate('/')}
            className="btn-primary"
          >
            Volver al Inicio
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="text-3xl font-bold text-center text-gray-800">
            Dinero: {Math.floor(gameState.money)}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Monedas</h2>
            <div className="grid grid-cols-1 gap-4">
              {COINS.map(coin => (
                <Coin
                  key={coin.name}
                  {...coin}
                  onCoinClick={handleCoinClick}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mejoras</h2>
            <div className="grid grid-cols-1 gap-4">
              {UPGRADES.map(upgrade => (
                <Upgrade
                  key={upgrade.id}
                  name={upgrade.name}
                  cost={getUpgradeCost(upgrade)}
                  count={gameState.upgrades[upgrade.id] || 0}
                  onUpgrade={() => handleUpgrade(upgrade.id)}
                  canAfford={gameState.money >= getUpgradeCost(upgrade)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;