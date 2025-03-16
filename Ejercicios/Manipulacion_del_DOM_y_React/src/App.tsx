import React, { useState } from "react";
import './App.css';

function App() {

  //Tipo propio para declarar un objeto Foto
  type Photo = {
    url: string;
    title: string;
  }

  //Fotos iniciales, se pueden añadir más
  const [photos, setPhotos] = useState<Photo[]>([
    { url: "/img/gatos.jpg", title: "Foto 1" },
    { url: "/img/perros.jpg", title: "Foto 2" },
    { url: "img/elefante.jpg", title: "Foto 3" },
    { url: "img/hipopotamo.jpg", title: "Foto 4" },
    { url: "img/lemur.jpg", title: "Foto 5" },
    { url: "img/loro.jpg", title: "Foto 6" },
    { url: "img/pato.jpg", title: "Foto 7" },
    { url: "img/buho.jpg", title: "Foto 8" },
    { url: "img/zorro.jpg", title: "Foto 10" },
  ]);
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Índice de la foto actual

  // Control de inputs
  const [newUrl, setNewUrl] = useState<string>(""); // Para editar la URL
  const [newTitle, setNewTitle] = useState<string>(""); // Para editar el título

  // Cambiar a la siguiente o anterior foto
  const handleNext = () => {

    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Actualizar la foto actual
  const handleUpdatePhoto = () => {
    setPhotos(photos.map((photo, index) => 
      index === currentIndex ? { ...photo, url: newUrl, title: newTitle } : photo
    ));
  };

  return (
    <div>
      <div>
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].title}
        />
        <h3>{photos[currentIndex].title}</h3>
      </div>
      <div>
        <button onClick={handlePrevious}>Anterior</button>
        <button onClick={handleNext}>Següent</button>
      </div>
      <div>
        <h4>Modificar Foto Actual</h4>
        <input
          type="text"
          placeholder="Nova URL"
          value={newUrl}
          onChange={(e) => setNewUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nou Títol"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <button onClick={handleUpdatePhoto}>Actualitzar Foto</button>
      </div>
    </div>
  );
}

export default App;