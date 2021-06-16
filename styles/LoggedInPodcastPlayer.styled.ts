import IconButton from '@material-ui/core/IconButton';
import styled from 'styled-components';

const LoggedInPlayerPlaylistContainer = styled.div<{showPlaylist:boolean}>`
    display: ${(props) => (props.showPlaylist ? 'block' : 'none')};
    background-color: hotpink;
    height: 9rem;

`;

const LoggedInPlayerContainer = styled.div`
    border: 1px solid blue;
    background-color: goldenrod;
    position: sticky;
    bottom: 0;
`;

const LoggedInPlayerControlContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
`;

const PlaylistPlayIconButton = styled(IconButton)`
    padding: 0;

    & .MuiSvgIcon-root {
        font-size: 2.43rem;
    }
`;

const PlayerEpisodeImg = styled.div`
    // border: 1px solid green;
    & img {
        border-radius: 15px;
    }
`;
const PlaylistIconPlayerImgContainer = styled.div`
    @media(max-width: 500px){
        flex-basis: 18%;
        padding: 1rem 0 1rem .58rem;
        display: flex;
        flex-flow: column nowrap;
    }
`;

const PlayerEpisodeDesc = styled.div`
    border: 1px solid black;
    flex-basis: 20%;
    padding: 1rem 0 1rem .58rem;
    margin: auto 0;
    & > span, & > p {
        padding: 0;
        margin: 0;
        font-size: .62rem;
    }
    @media(max-width: 500px){
        display: none;
    }
`;

export { LoggedInPlayerPlaylistContainer, LoggedInPlayerContainer, LoggedInPlayerControlContainer, PlaylistPlayIconButton, PlayerEpisodeImg, PlaylistIconPlayerImgContainer, PlayerEpisodeDesc };
