import logo from './logo.svg';
import './App.css';
import  {beers} from './beers';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world. more content coming shortly...
        </p>
        <p>
          this website will list naturally gluten-free beer available in Europe (and probably everywhere else too, in time).
        </p>
        <p>
          please send info on naturally gluten-free beers available in Europe to: <span><a href="mailto:james.malvern@gmail.com">james.malvern@gmail.com</a></span>
        </p>
      </header>
    </div>
  );
}

export default App;
