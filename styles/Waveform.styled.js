import styled from 'styled-components';

const generalProgressBar = `
    position: absolute;
    height: 16%;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    padding-top: .45rem;
`;

const TotalProgressBar = styled.svg`
    ${generalProgressBar}
    width: 53%;
`;

const CurrentProgressBar = styled.svg.attrs((props) => ({
  style: {
    width: props.currTime && props.duration ? `calc(53% * ${props.currTime / props.duration}` : '0',
  },
}))`
    ${generalProgressBar}
    
`;
export { ProgressBarContainer, TotalProgressBar, CurrentProgressBar };
