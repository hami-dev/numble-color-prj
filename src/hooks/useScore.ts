import { useState } from 'react';

interface useScoreProps {
  score: number;
  calcScore: (stage: number, leftTime: number) => void;
  resetScore: () => void;
}

function useScore(): useScoreProps {
  const [score, setScore] = useState<number>(0);

  const calcScore = (stage: number, leftTime: number) => {
    setScore(prev => prev + Math.pow(stage, 3) * leftTime);
  };

  const resetScore = () => {
    setScore(0);
  };
  return { calcScore, score, resetScore };
}

export default useScore;
