import React from 'react';

interface LeftTimeProps {
  leftTime: number;
  startCountdown: () => void;
  stopCountdown: () => void;
}

const LeftTime: React.FC<LeftTimeProps> = ({ leftTime }) => {
  return <div>남은 시간: {leftTime}</div>;
};

export default LeftTime;
