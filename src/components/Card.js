import React, { useState, useEffect } from "react";
import Button from "./Button";
import Divider from "./Divider";
import { DividerMobile } from "./DividerMobile";
import { getAdvice } from "../api/AdviceApi";
import { AdviceNumber } from "./AdviceNumber";
import { AdviceText } from "./AdviceText";

const Card = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    settingInfo();
  }, []);

  let settingInfo = async () => {
    setAdvice(await getAdvice());
  };

  return (
    <div className="card">
      <AdviceNumber advice={advice} />
      <AdviceText advice={advice} />
      <Divider />
      <DividerMobile />
      <Button settingInfo={settingInfo} />
    </div>
  );
};

export default Card;
