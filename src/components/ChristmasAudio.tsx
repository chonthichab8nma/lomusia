const ChristmasButton = () => {
  const playChristmasSound = () => {
    const santa = new Audio("/songs/santa.mp3");
    const music = new Audio("/songs/christmas-music.mp3");

    santa.volume = 1.0;
    music.volume = 0.5;

    santa.addEventListener("ended", () => {
      music.play().catch((e) => console.log("Music play failed:", e));
    });

    santa.play().catch((e) => console.log("Santa play failed:", e));
  };

  return (
    
    <div className="fixed bottom-10 right-10 z-10000"> 
      <button
        onClick={playChristmasSound}
        className="group relative px-6 py-3 bg-red text-white rounded-full font-bold text-lg shadow-2xl hover:bg-green transition-all duration-300 transform hover:scale-110 active:scale-95 flex items-center gap-2"
      >
        <span className="animate-bounce">🎄</span>


        
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </button>
    </div>
  );
};

export default ChristmasButton;