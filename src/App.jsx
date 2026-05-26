import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <div className="min-h-screen bg-ganges-blue font-sans">
      <Navbar />
      <Hero />
      
      {/* Temporary spacing to test the scroll effect */}
      <div className="h-[150vh] flex items-center justify-center text-white/40">
        Scroll down to watch the header morph...
      </div>
    </div>
  );
}

export default App;