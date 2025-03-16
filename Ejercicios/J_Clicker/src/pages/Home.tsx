import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleReset = () => {
    if (window.confirm('¿Estás seguro de que quieres borrar todo el progreso?')) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">J Clicker</h1>
        <div className="space-y-4">
          <button
            onClick={() => navigate('/game')}
            className="w-full btn-primary"
          >
            Jugar
          </button>
          <button
            onClick={handleReset}
            className="w-full btn-danger"
          >
            Resetear Progreso
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;