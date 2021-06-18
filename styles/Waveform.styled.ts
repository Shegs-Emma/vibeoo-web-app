import styled from 'styled-components';

interface CurrentProgressBarProps {
  duration: number | undefined,
  currTime: number | undefined,
}

const generalProgressBar = (isLoggedIn:boolean = false) =>`
    position: absolute;
    height: ${isLoggedIn ? '41%' : '16%'};
    // border: 1px solid red;
`;

const ProgressBarContainer = styled.div`
    width: 100%;
    padding-top: .45rem;
`;

const TotalProgressBar = styled.svg`
    ${(props) => generalProgressBar()}
    width: 53%;
`;

const CurrentProgressBar = styled.svg.attrs<CurrentProgressBarProps>((props) => ({
  style: {
    width: props.currTime && props.duration ? `calc(53% * ${props.currTime / props.duration}` : '0',
  },
}))<CurrentProgressBarProps>`
    ${(props) => generalProgressBar()}
    
`;
const ProgressBarContainerLoggedIn = styled.div`
    width: 90%;
    padding-top: .25rem;
    margin: .53rem 0 2rem .5rem;
    // border: 1px solid green;
`;

const TotalProgressBarLoggedIn = styled.svg`
    ${(props) => generalProgressBar(true)}
    width: 50%;
`;

const CurrentProgressBarLoggedIn = styled.svg.attrs<CurrentProgressBarProps>((props) => ({
  style: {
    width: props.currTime && props.duration ? `calc(50% * ${props.currTime / props.duration}` : '0',
  },
}))<CurrentProgressBarProps>`
    ${(props) => generalProgressBar(true)}
    
`;

export { ProgressBarContainer, TotalProgressBar, CurrentProgressBar, ProgressBarContainerLoggedIn, TotalProgressBarLoggedIn, CurrentProgressBarLoggedIn };
