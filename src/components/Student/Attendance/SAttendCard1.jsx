import React from "react";
import { useEffect } from "react";
function SCard1(props){
//    var progressBarWidth= parseInt(props.attendPer);
//    var progressId = props.code;
//    var x= progressBarWidth + "%";
//    console.log(progressBarWidth + "%")
//    console.log();
//    useEffect(()=>{
//     document.getElementById("BAR").style.width = x;
//     // document.getElementById({progressId}).style.width = x;
//    },[])
 
   return <>
<div className="studentAttendCardRow ">
<span id="SCdCodeS">{props.code}</span>
<span id="SCdSubS" onClick={props.navigator}>{props.sub}</span>
<span id="SCdAttendS4">{props.attendC}</span>
<span id="SCdTotalS4">{props.totalC}</span>
<span id="SCdAttPer" >
<div className="progress">
<div className="progressBarSA" id="BAR" style={{width:`${props.attendPer}%`}}></div> 
        {/* <div className="progressBarSA" id={progressId}></div> */}
    </div>
</span>
</div>

    </>
}
export default SCard1;
