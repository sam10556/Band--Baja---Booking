import React from "react";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

const PartyPopper = () => {
  const { width, height } = useWindowSize();
  return <Confetti width={width} height={height} numberOfPieces={700}/>;
};

export default PartyPopper;
