import { useRef } from 'react';

export default function App() {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* Container para centralizar o conteúdo */}
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Epic Sax Guy</h2>
        
        {/* Botão para tocar o som */}
        <button
          onClick={playSound}
          className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg mb-4"
        >
          Tocar Som
        </button>

        {/* Referência ao arquivo de áudio */}
        <audio ref={audioRef} src="/epic-sax-guy-2022_mQkaeWy.mp3" />
      </div>
    </div>
  );
}
