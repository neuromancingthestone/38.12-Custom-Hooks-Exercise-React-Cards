import {useState} from "react";

// Custom hook
// Flip the state of the card

const useFlip = () => {
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => {
    setIsFacingUp(isFacingUp => !isFacingUp);
  };  
  return [isFacingUp, flipCard]
}

export default useFlip;