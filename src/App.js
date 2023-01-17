import "./App.css";
import Results from "./components/Results";
import Footer from "./components/footer/Footer";
import { useState } from "react"; 
import moment from 'moment';


export default function  App(props) {
  
  const [message, setHalfLife] = useState("");
  const getHalfLife = (event) => {
    setHalfLife(event.target.value);
    console.log(event.target.value);
  };

  const [activity, setActivity] = useState("");
  const getActivity = (event) => {
  setActivity(event.target.value);
  console.log(activity);
};

const [measurmentTime, setMeasurmentTime] = useState("");
const getMeasurmentTime = (event) => {
  setMeasurmentTime(event.target.value);
}

const [calculationTime, setCalculationTime] = useState("");
const getCalculationTime = (event) => {
  setCalculationTime(event.target.value);
  timeDifference(calculationTime, measurmentTime)
}
function timeDifference(calculationTime, measurmentTime){
  let a = moment(calculationTime);
  let b = moment(measurmentTime);
  let c = a.diff(b, 'minutes');
  return c;
}
  return (

    <div className="App">
      <div className="kafelek">
        <h3>SELECT ISOTOPE</h3>
        <select onChange={getHalfLife} defaultValue={0}>
          <option value={0}>Select</option>
          <option value={360.6}>Tc-99m</option>
          <option value={67.629}>Ga-68</option>
          <option value={109.77}>F-18</option>
        </select>
       

        <hr></hr>
        <form>
          <p>INITIAL ACTIVITY (MBq):</p>
          <input type="number" defaultValue={0} onChange={getActivity}></input> 
          <p>MEASURMENT TIME:</p>
          <input type="datetime-local"  onInput={getMeasurmentTime}></input>
          <p>CALCULATION TIME:</p>
          <input type="datetime-local" onChange={getCalculationTime}></input><br></br>


        </form>
        <button>CALCULATE</button>
        <hr></hr>
        <h3>RESULTS:</h3>
        <Results halfLife={message} activity={activity} mTime={timeDifference(calculationTime, measurmentTime)} />
        <Footer />
      </div>

    </div>
  );
}