import React from 'react';

interface StageProps {
  stage: number;
}

const Stage: React.FC<StageProps> = ({ stage }) => {
  return <div>스테이지 : {stage}</div>;
};

export default Stage;
