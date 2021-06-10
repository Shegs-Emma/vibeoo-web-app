import styled from 'styled-components';

interface CurrentProgressBarProps {
  duration: number | undefined,
  currTime: number | undefined,
}

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

const CurrentProgressBar = styled.svg.attrs<CurrentProgressBarProps>((props) => ({
  style: {
    width: props.currTime && props.duration ? `calc(53% * ${props.currTime / props.duration}` : '0',
  },
}))<CurrentProgressBarProps>`
    ${generalProgressBar}
    
`;
export { ProgressBarContainer, TotalProgressBar, CurrentProgressBar };
