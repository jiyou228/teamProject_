import React, { useState, useEffect } from "react";

const ProgressBar = (props) => {
  const { bgcolor, nowStep, totalStep } = props;

  const containerStyles = {
    height: 20,
    width: '50%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  }

  const fillerStyles = {
    height: '100%',
    width: `${(nowStep/totalStep)*100}%`,
    backgroundColor: bgcolor,
    transition: 'width 1s ease-in-out',
    borderRadius: 'inherit',
    textAlign: 'right',
  }

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }

  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted((nowStep/totalStep)*100), 500);
  }, [completed]);

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${Math.round((nowStep/totalStep)*100)}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
