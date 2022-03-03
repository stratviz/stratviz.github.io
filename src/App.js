import vizualizer from './classes/vizualizer';
import './styles/vizualizer.css'
function App() {
	
	const screen_width = (percentage) => window.innerWidth * percentage;
	const screen_height = (percentage) => window.innerHeight * percentage;
	
  return (
    <div className="App">
      <vizualizer id="vizualizer" className='vizualizer' width={screen_width(0.8)} height={screen_height(0.9)}/>
    </div>
  );
}

export default App;
