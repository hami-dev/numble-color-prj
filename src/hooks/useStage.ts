import React, { useCallback, useRef, useState } from 'react';

interface useStageProps {
  stage: number;
  nextStage: () => void;
  resetStage: () => void;
}

function useStage(): useStageProps {
  const [stage, setStage] = useState(1);

  const nextStage = () => {
    setStage(stage => stage + 1);
  };

  const resetStage = useCallback(() => {
    setStage(1);
  }, []);

  return { stage, nextStage, resetStage };
}

export default useStage;
