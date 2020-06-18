import React from 'react';
import './dinner.css';
function Dinner(props){
return (
<div>
<h1>We serve following dishes in a week</h1>
 <h2><ul>
<li>On Monday:<span className="li">{props.mondayDish}</span></li>
<li>On Tuseday:<span className="li">{props.tusedayDish}</span></li>
<li>On Wednesday:<span className="li">{props.wednesdayDish}</span></li>
<li>On Thirsday:<span className="li">{props.thirsdayDish}</span></li>
<li>On Friday:<span className="li">{props.fridayDish}</span></li>
<li>On Satureday:<span className="li">{props.saturedayDish}</span></li>
<li>On Sunday:<span className="li">{props.sundayDish}</span></li>    
</ul></h2>


</div>
);
}
export default Dinner;
