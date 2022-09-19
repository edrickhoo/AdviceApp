import React from "react";

const AdviceNumber = ({ advice }) => {
  return (
    <div className="advice-number">
      <p>Advice #{advice.id}</p>
    </div>
  );
};

export { AdviceNumber };
