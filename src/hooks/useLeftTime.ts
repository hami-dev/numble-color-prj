import React, { useCallback, useRef, useState } from 'react';

interface useLeftTimeProps {
  leftTime: number;
  startCountdown: () => void;
  resetCountdown: () => void;
  stopCountdown: () => void;
  minusCountdown: () => void;
}

function useLeftTime(): useLeftTimeProps {
  const INITIAL_TIME = 15;
  const [leftTime, setLeftTime] = useState(INITIAL_TIME);

  const timeInterval: { current: NodeJS.Timeout | null } = useRef(null);

  const startCountdown = () => {
    timeInterval.current = setInterval(() => {
      setLeftTime(prev => prev - 1);
    }, 1000);
  };

  const resetCountdown = useCallback(() => {
    setLeftTime(INITIAL_TIME);
  }, []);

  const stopCountdown = useCallback(() => {
    if (timeInterval.current === null) return;
    clearInterval(timeInterval.current);
  }, []);

  const minusCountdown = useCallback(() => {
    setLeftTime(leftTime => leftTime - 3);
  }, []);

  return {
    leftTime,
    startCountdown,
    resetCountdown,
    stopCountdown,
    minusCountdown,
  };
}

export default useLeftTime;
