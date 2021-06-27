import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';

const PlaylistTrack = styled.div`
	display: flex;
	flex-flow: row nowrap;
	// border: 1px solid black;
	align-items: center;
	margin-bottom: 1rem;
`;

const PlaylistTrackImg = styled.div`
	flex-basis: 20%;
	// border: 1px solid yellow;
`;

const PlaylistTrackPlayBtn = styled(IconButton)`
    padding-left: 0;
    padding-right: 0;
    // border: 1px solid red;
    flex-basis: 10%;

    & .MuiSvgIcon-root {
        font-size: 2.43rem;
    }
`;

const PlaylistTrackTeAndNnContainer = styled.div`
	display: flex;
	flex-direction: column;
	// border: 1px solid green;
	flex-grow: 1;
`;

const PlaylistTrackTitle = styled(Typography)`
	white-space: nowrap;
`;

const PlaylistTrackNarration = styled(Typography)`
	font-size: .75rem;
`;

const PlaylistTrackDelete = styled.div`
	// border: 1px solid blue;
	cursor: pointer;
`;



export { PlaylistTrack, PlaylistTrackImg, PlaylistTrackPlayBtn, PlaylistTrackTeAndNnContainer, PlaylistTrackTitle, PlaylistTrackNarration, PlaylistTrackDelete };