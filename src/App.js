import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SimpleCounter from './components/SimpleCounter';
import './assets/custom.scss';
import FunctionalCounter from './components/FunctionalCounter';


function App() {
  return (
    <div className="App">
    {/* <SimpleCounter />   */}
    <FunctionalCounter />
    
    </div>
  );
}

export default App;
