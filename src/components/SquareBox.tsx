import React, { ReactElement, useMemo } from 'react';
import styled from 'styled-components';

import { calcSquareLength, calcSideLength } from 'utils/Utils';

interface SquareBoxProps {
  stage: number;
  nextStage: () => void;
  minusCountdown: () => void;
}

const SquareBox: React.FC<SquareBoxProps> = ({
  stage,
  nextStage,
  minusCountdown,
}): ReactElement => {
  const totalLen = calcSquareLength(stage);
  const len = calcSideLength(stage);

  const genRandomNum = (num: number) => {
    return Math.floor(Math.random() * num);
  };

  const makeSquareList = () => {
    const randomNum = genRandomNum(totalLen);
    const list = [];
    for (let i = 0; i < totalLen; i++) {
      if (i === randomNum) {
        list.push(true);
      } else {
        list.push(false);
      }
    }
    return list;
  };

  const calcColor = (origin: number, code: number) => {
    if (origin + code > 255) {
      return origin - code;
    }
    return origin + code;
  };

  const makeColor = () => {
    const sub = 100 - stage * 2;
    const origin = {
      r: genRandomNum(255),
      g: genRandomNum(255),
      b: genRandomNum(255),
    };
    const newColor = {
      r: calcColor(origin.r, Math.floor(sub / 3)),
      g: calcColor(origin.g, Math.floor(sub / 3)),
      b: calcColor(origin.b, Math.floor(sub / 3)),
    };

    return {
      answerColor: `rgb(${origin.r}, ${origin.g}, ${origin.b})`,
      nonAnswerColor: `rgb(${newColor.r}, ${newColor.g}, ${newColor.b})`,
    };
  };

  const renderSquares = useMemo(() => {
    const answerList = makeSquareList();
    const { answerColor, nonAnswerColor } = makeColor();
    return answerList.map(item => {
      if (item) return <Answer onClick={nextStage} color={answerColor} />;
      else return <NonAnswer onClick={minusCountdown} color={nonAnswerColor} />;
    });
  }, [totalLen, len, stage]);

  return (
    <div>
      <SquareWrapper len={len} stage={stage}>
        {renderSquares}
      </SquareWrapper>
    </div>
  );
};

export default SquareBox;

const SquareWrapper = styled.div<{ len: number; stage: number }>`
  width: 400px;
  height: 400px;
  display: grid;
  grid-template-columns: ${({ len }) => `repeat(${len}, 1fr)`};
  gap: ${({ stage }) => (stage < 15 ? `5px` : `3px`)};
`;

const Answer = styled.div<{ color: string }>`
  background-color: ${({ color }) => `${color}`};
`;
const NonAnswer = styled.div<{ color: string }>`
  background-color: ${({ color }) => `${color}`};
`;
