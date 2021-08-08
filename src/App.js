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
          this website will soon be listing naturally gluten-free beer available in Europe (and probably everywhere else too in time).
        </p>
        <p>
          naturally gluten-free beer is beer made without gluten.
        </p>
        <p>
          (i.e not made with barley and then 'deglutenised').
        </p>
        <p>
          we're talking beer for sensitive celiac/gf beer lovers like me. 
        </p> 
        <p>
          please send info on any naturally gluten-free beers to: james.malvern@gmail.com
        </p>
      </header>
    </div>
  );
}

export default App;
