import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const AudioPlayerContainer = styled.div`
    /* border: 1px solid green; */
    padding-left: .45rem;
    /* margin: 0 2rem; */
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
`;

const StyledDuration = styled(Typography)``;
const StyledCurrentTime = styled(Typography)``;
const StyledDivider = styled(Typography)`
    margin: 0 .43rem;
`;
const StyledVolumeContainer = styled.div`
    width: 77%;
`;
const StyledVolumeControl = styled(Slider)`
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

export {
  AudioPlayerContainer, ProgressBarSection, StyledIconButton, PlayerTimeContainer,
  StyledDuration, StyledCurrentTime, StyledDivider, StyledVolumeContainer, StyledVolumeControl,
};
