import React from "react";

function Results(props){

    let activity = Number(props.activity); //MBq
    let halfLife = Number(props.halfLife); //minutes
    let mTime = Number(props.mTime);  //minutes


function remainingActivity(activity, halfLife, mTime){
let decayConst = 0.693 / halfLife;

let resultActivity = activity * Math.exp(-decayConst * mTime);
return resultActivity;

};

let result = remainingActivity(activity, halfLife, mTime);
if (isNaN(result)){
    return(
        <div className="results">
    <h1> - MBq</h1>
        </div>
        )
}
else{
    return(
    <div className="results">
<h1>{result.toFixed(2)} MBq</h1>
    </div>
)
}   
}

export default Results;