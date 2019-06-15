import React from 'react';
import '../BadgeComponent.css';

function ButtonType(props){
  if(props.number > 50){
    return <p className="AdvancedUser">{props.number}</p>

  } else {
    return <p className="BeginningUser">{props.number}</p>;
  }
}

function BadgeComponent(){
  return (
    <ButtonType number={100}/>
  );
};

export default BadgeComponent;
