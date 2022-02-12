import { useState } from 'react';

interface useScoreProps {
  score: number;
  calcScore: (stage: number, leftTime: number) => void;
}

function useScore(): useScoreProps {
  const [score, setScore] = useState<number>(0);

  const calcScore = (stage: number, leftTime: number) => {
    setScore(prev => prev + Math.pow(stage, 3) * leftTime);
  };
  return { calcScore, score };
}

export default useScore;
