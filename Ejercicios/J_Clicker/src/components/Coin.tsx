import React from 'react';

interface CoinProps {
  name: string;
  value: number;
  image: string;
  onCoinClick: (value: number) => void;
}

const Coin: React.FC<CoinProps> = ({ name, value, image, onCoinClick }) => {
  return (
    <div 
      className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-6 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:scale-105 flex items-center space-x-4"
      onClick={() => onCoinClick(value)}
    >
      <img src={image} alt={name} className="w-16 h-16 object-contain" />
      <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600">Valor: {value}</p>
      </div>
    </div>
  );
};

export default Coin; 