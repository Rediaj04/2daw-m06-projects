import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Tablero from './components/Tablero';
import './styles/App.css';

const App: React.FC = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="App">
                <h1>FusionPlus</h1>
                <Tablero />
            </div>
        </DndProvider>
    );
};

export default App;