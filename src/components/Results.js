import React from "react";

function Results(props){

    let activity = 250; //MBq
    let halfLife = 68; //minutes
    let mTime = 120;


function remainingActivity(activity, halfLife, mTime){
let decayConst = 0.693 / halfLife;

let resultActivity = activity * Math.exp(-decayConst * mTime);
return resultActivity;

};

let result = remainingActivity(activity, halfLife, mTime);

    return(
        <div className="results">
<h1>{result.toFixed(2)} MBq</h1>
        </div>
    )
}

export default Results;