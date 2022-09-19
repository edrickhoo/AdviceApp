import React from "react";

function AdviceText(props) {
  return (
    <div className="advice-text">
      <p>"{props.advice.text}"</p>
    </div>
  );
}

export { AdviceText };
