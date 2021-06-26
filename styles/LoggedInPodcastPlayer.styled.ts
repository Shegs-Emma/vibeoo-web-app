import IconButton from '@material-ui/core/IconButton';
import CustomLink from '../components/CustomLink';
import styled from 'styled-components';

const LoggedInPlayerPlaylistContainer = styled.div<{showPlaylist:boolean}>`
    display: ${(props) => (props.showPlaylist ? 'block' : 'none')};
    background-color: hotpink;
    height: 12rem;
    overflow-y: scroll;
    padding: 1rem;
    @media(min-width: 700px){
        width: 30%;
    }
`;

const LoggedInPlayerContainer = styled.div`
    border: 1px solid blue;
    background-color: transparent;
    position: sticky;
    bottom: 0;
`;

const LoggedInPlayerControlContainer = styled.div`
    display: flex;
    flex-flow: row nowrap;
    background-color: goldenrod;
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
    @media(min-width: 800px){
        flex-basis: 35%;
    }
`;
const PlaylistIconPlayerImgContainer = styled.div`
    flex-basis: 18%;
    padding: 1rem 0 1rem .58rem;
    display: flex;
    flex-direction: column;
    @media(min-width: 800px){
        flex-flow: row nowrap;
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
    @media(min-width: 800px){
        margin-left: -3rem;
    }
`;

const LoggedInPlayerEpisodeLink = styled(CustomLink)`
    border: 1px solid blue;
    display: block;
`

export { LoggedInPlayerPlaylistContainer, LoggedInPlayerContainer, 
    LoggedInPlayerControlContainer, PlaylistPlayIconButton, PlayerEpisodeImg, 
    PlaylistIconPlayerImgContainer, PlayerEpisodeDesc, LoggedInPlayerEpisodeLink };
