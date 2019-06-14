import React from 'react';
import '../BadgeComponent.css';

function ButtonType(props){
  if(props.number > 50){
    return <button className="AdvancedUser">{props.number}</button>;
  } else {
    return <button className="BeginningUser">{props.number}</button>;
  }
}

function BadgeComponent(){
  return (
    <ButtonType number={100} />
  );
};

export default BadgeComponent;
