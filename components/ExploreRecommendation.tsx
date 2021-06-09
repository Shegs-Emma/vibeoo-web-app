import { ReactElement } from 'react';
import ExploreRecommendationStyle from '../styles/ExploreRecommendation.styled';

interface ExploreRecommendationProps {
  children: ReactElement | ReactElement[]
}

const ExploreRecommendation = ({ children }:ExploreRecommendationProps) => {
  const isTouchScreen = ('ontouchstart' in window)
  || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);

  console.log(isTouchScreen);
  return (
    <ExploreRecommendationStyle isMobile={isTouchScreen}>
      { children }
    </ExploreRecommendationStyle>
  );
};

export default ExploreRecommendation;
