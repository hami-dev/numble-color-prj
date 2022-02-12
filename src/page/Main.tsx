import React, { useEffect } from 'react';
import styled from 'styled-components';

import SquareBox from 'components/SquareBox';
import Score from 'components/Score';
import Stage from 'components/Stage';
import LeftTime from 'components/LeftTime';

import useLeftTime from 'hooks/useLeftTime';
import useStage from 'hooks/useStage';
import useScore from 'hooks/useScore';

const Main = () => {
  const {
    leftTime,
    startCountdown,
    resetCountdown,
    stopCountdown,
    minusCountdown,
  } = useLeftTime();
  const { stage, nextStage, resetStage } = useStage();
  const { score, calcScore } = useScore();

  const handleSuccessLevel = () => {
    calcScore(stage, leftTime);
    nextStage();
    resetCountdown();
  };

  const handleFailLevel = () => {
    minusCountdown();
  };

  useEffect(() => {
    startCountdown();
    return () => {
      stopCountdown();
    };
  }, [startCountdown, stopCountdown]);

  useEffect(() => {
    if (leftTime <= 0) {
      stopCountdown();
      alert(`스테이지: ${stage}, 점수: ${score}`);
      resetStage();
      resetCountdown();
    }
  }, [leftTime]);

  return (
    <GameWrapper>
      <ScoreWrapper>
        <Stage stage={stage} />
        <LeftTime
          leftTime={leftTime}
          startCountdown={startCountdown}
          stopCountdown={stopCountdown}
        />
        <Score score={score} />
      </ScoreWrapper>
      <SquareBox
        stage={stage}
        handleSuccessLevel={handleSuccessLevel}
        handleFailLevel={handleFailLevel}
      />
    </GameWrapper>
  );
};

export default Main;

const GameWrapper = styled.div`
  padding: 50px;
`;

const ScoreWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;
