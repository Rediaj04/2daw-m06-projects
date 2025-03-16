import React from 'react';

interface UpgradeProps {
  name: string;
  cost: number;
  count: number;
  onUpgrade: () => void;
  canAfford: boolean;
}

const Upgrade: React.FC<UpgradeProps> = ({ name, cost, count, onUpgrade, canAfford }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-gray-600">Coste: {cost}</p>
        </div>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          x{count}
        </span>
      </div>
      <button
        onClick={onUpgrade}
        disabled={!canAfford}
        className={`w-full py-2 px-4 rounded-lg transition-colors ${
          canAfford 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-gray-200 text-gray-400 cursor-not-allowed'
        }`}
      >
        {canAfford ? 'Comprar' : 'No hay suficiente dinero'}
      </button>
    </div>
  );
};

export default Upgrade; 