import { useState, useEffect } from 'react';

export default function Hero() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate 25 unique embers with random properties
    const particleArray = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`, // Random horizontal starting point
      size: `${Math.random() * 3 + 2}px`, // Size between 2px and 5px
      duration: `${Math.random() * 15 + 10}s`, // Rises for 10 to 25 seconds
      delay: `${Math.random() * 10}s`, // Starts anytime within the first 10 seconds
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative w-full h-screen bg-ganges-blue flex items-center justify-center overflow-hidden">
      
      {/* The Firefly Field */}
      <div className="absolute inset-0 z-0">
        {particles.map((p) => (
          <span
            key={p.id}
            className="particle absolute bottom-0"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDuration: p.duration,
              animationDelay: p.delay,
            }}
          ></span>
        ))}
      </div>

      {/* The Typography */}
      <div className="relative z-10 text-center px-4">
        <p className="text-saffron uppercase tracking-[0.3em] text-sm font-semibold mb-4">
          Varanasi · Kashi · Banaras
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Experience the Soul <br /> of the Ganges
        </h1>
      </div>
    </section>
  );
}