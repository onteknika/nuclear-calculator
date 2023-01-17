import "./App.css";
import Results from "./components/Results";
import Footer from "./components/footer/Footer";



function App(props) {

  return (
    
    <div className="App">
      
      <div className="kafelek"> 
      <h3>CHOOSE ISOTOPE</h3>
      <select>
        <option>Tc-99m</option>
        <option>Ga-68</option>
        <option>F-18</option>
      </select>
      <hr></hr>
      <form>
        <p>INITIAL ACTIVITY:</p>
        <input type="text"></input> MBq
        
        <p>MEASURMENT TIME:</p>
        <input type="datetime-local"></input>
        <p>CALCULATED TIME:</p>
        <input type="datetime-local"></input>
      </form>
      <hr></hr>
      <h3>RESULTS:</h3>
      <Results/>
      <Footer />
      </div>

    </div>

  );
}

export default App; 