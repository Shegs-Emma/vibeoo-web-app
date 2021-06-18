import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';


const AudioPlayerContainer = styled.div`
    /* border: 1px solid green; */
    padding-left: .45rem;
`;
const AudioPlayerContainerLoggedIn = styled.div`
    padding-left: .45rem;
    display: flex;
    // border: 1px solid white;
    flex-basis: 69%;
`;

const ProgressBarSection = styled.div`
    /* border: 1px solid green; */
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const StyledIconButton = styled(IconButton)`
    padding-left: 0;
    padding-right: 0;

    & .MuiSvgIcon-root {
        font-size: 2.43rem;
    }
`;

const PlayerTimeContainer = styled.div`
    /* border: 1px solid blue; */
    width: 77%;
    display: flex;
    justify-content: center;
    margin: auto 0;
`;
const PlayerTimeContainerLoggedIn = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledDuration = styled(Typography)``;
const StyledCurrentTime = styled(Typography)``;
const StyledDivider = styled(Typography)`
    margin: 0 .43rem;
`;
const StyledVolumeContainer = styled.div<{isLoggedIn?: boolean}>`
    width: 77%;
    margin: auto 0;
`;
const StyledVolumeControl = styled(Slider)<{type: 'range'}>`
    & .MuiSlider-rail {
        background-color: whitesmoke;
    }
    & .MuiSlider-track {
        background-color: black;
    }
    & .MuiSlider-thumb {
        background-color: #fff;
    }
    & .MuiSlider-thumb:hover {
        box-shadow: 0px 0px 0px 8px rgb(186 190 211 / 16%);
    }
`;

const PlayerTimeWaveformContainer = styled.div`
    // border: 1px solid red;
    width: 100%;
    padding-top: 1.42rem;
    @media(min-width:800px){
        display: flex;
        flex-flow: row-reverse nowrap;
    }
`;

export {
  AudioPlayerContainer, AudioPlayerContainerLoggedIn, ProgressBarSection, StyledIconButton, PlayerTimeContainer, PlayerTimeContainerLoggedIn,
  StyledDuration, StyledCurrentTime, StyledDivider, StyledVolumeContainer, StyledVolumeControl, PlayerTimeWaveformContainer
};
