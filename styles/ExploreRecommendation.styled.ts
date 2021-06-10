import styled from 'styled-components';

const forMobile = () => (
  `
  overflow-x: auto;
  display: flex;
  flex-flow: row nowrap;
  /* padding: 1rem 1rem; */
  margin-bottom: 1rem;

  &::-webkit-scrollbar {
    display: none;
}

  & > div {
   flex: 0 0 auto;
  }
  `
);

const ExploreRecommendationStyle = styled.div<{ismobile: boolean}>`
    ${(props) => (props.ismobile ? forMobile() : '')}
`;

export default ExploreRecommendationStyle;
