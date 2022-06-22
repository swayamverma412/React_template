import React from "react";

function About(props){
    return(
<div id='about'>
    <div className="about-image">
        <img src={props.image} alt=""/>
    </div>
    <div className="about-text">
        <h2>{props.title}</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, nihil necessitatibus voluptates exercitationem voluptatum quos amet id, quidem quas nesciunt quis esse omnis fugit possimus doloremque sit veniam perferendis ex.</p>
        <button>{props.button}</button>
    </div>

</div>
    )
}
 export default About