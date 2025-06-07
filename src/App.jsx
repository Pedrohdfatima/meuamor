import React, { useState, useEffect } from 'react';
import './App.css';

const TOTAL_FOTOS = 160;
const INTERVALO_EM_SEGUNDOS = 5;
const listaDeFotos = Array.from({ length: TOTAL_FOTOS }, (_, i) => `/meuamor/fotos/${i + 1}.jpg`);

function App() {
  const [indiceAtual, setIndiceAtual] = useState(0);
  const [fotosEmbaralhadas, setFotosEmbaralhadas] = useState([]);
  const [iniciado, setIniciado] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setFotosEmbaralhadas(listaDeFotos.sort(() => Math.random() - 0.5));
  }, []);

  useEffect(() => {
    if (iniciado && fotosEmbaralhadas.length > 0) {
      const timer = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setIndiceAtual((prevIndice) => (prevIndice + 1) % fotosEmbaralhadas.length);
          setIsFading(false);
        }, 1000);
      }, INTERVALO_EM_SEGUNDOS * 1000);
      return () => clearInterval(timer);
    }
  }, [iniciado, fotosEmbaralhadas]);

  const handleStart = () => {
    setIniciado(true);
  };

  if (fotosEmbaralhadas.length === 0) {
    return <div className="loading-screen">Preparando as memórias...</div>;
  }

  const fotoAtualUrl = fotosEmbaralhadas[indiceAtual];
  const proximaFotoUrl = fotosEmbaralhadas[(indiceAtual + 1) % fotosEmbaralhadas.length];

  return (
    <>
      <img src={proximaFotoUrl} style={{ display: 'none' }} alt="preloading" />

      <div
        className="background-container"
        style={{ backgroundImage: `url("${fotoAtualUrl}")` }}
      >
        <div className="content-container">
          <div className={`overlay ${isFading ? 'fading' : ''}`}></div>

          {iniciado ? (
            <h1>Para o Meu Amor</h1>
          ) : (
            <div className="start-overlay">
              <button onClick={handleStart} className="play-button">
                Clique para começar ❤️
              </button>
            </div>
          )}
        </div>
      </div>


 
      {/* O player agora só é renderizado se 'iniciado' for true */}
      {iniciado && (
        <>
        <span className="spotify-instruction">
            Dê o play para nossa trilha sonora ❤️
          </span>
        <div className="spotify-player">
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/3k078yDFkRCgcHUwZPck4j?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
         </>
      )}
    </>
  );
  
}

export default App;